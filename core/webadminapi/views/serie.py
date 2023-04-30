import os
import random
from pathlib import Path
from django.http import Http404
from django_filters import rest_framework as filters
from rest_framework import generics
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated

from core.webadminapi.core import (AbstractDeteilsView,
                                   AbstractGenericsAPIView,
                                   AbstractGenericsAPIViewExtended,
                                   AbstractUpdateView,
                                   Authentication,
                                   SqlAction, AbstractStats, AbstractItems, AddRelation,Top)
from core.webadminapi.filters import MovieFilter, SerieFilter
from core.webadminapi.serializers import (BannerSerializer, MoviesSerializer,
                                          PhotoSerializerSeries,
                                          SerieSerializer,
                                          SerieSerializerUpdate,
                                          SerieSlectSerializer,
                                          StarsSerializer, StatsSerializer, RatingsSerializer, TagsSerializer,
                                          SerieSerializerID, StarsSerializerTop)
from core.wideocollectorseader.models import Serie, Likes, DisLikess, Views,Movie
from videocolectorwebadmin.global_setings import photo_ext
from rest_framework.pagination import PageNumberPagination


class SeriesPhotosView(AbstractGenericsAPIViewExtended):
    serializer_class = PhotoSerializerSeries
    queryset = Serie.objects.all()
    Model = Serie

    def filter_queryset(self):
        Model = self.get_object(self.kwargs.get("pk"))
        miandir=os.listdir(Model.dir+'\photo')
        photos=[]
        for photo in miandir:
            if 'avatar' != Path(photo).stem and 'banner' != Path(photo).stem:
                if photo.endswith(photo_ext):
                    photos.append(
                        {
                            "url"     :   Model.web_dir+'\photos\\'+photo,
                            "name"    :   Model.show_name
                         },
                    )
        for Movie in Model.movies.all():
            for photo in os.listdir(Movie.dir):
                if photo.endswith(photo_ext):
                    if 'cover' != Path(photo).stem:
                        photos.append(
                            {
                                "url": Movie.web_dir + '\\' + photo,
                                "name": Movie.show_name
                            },
                        )
        return photos

class SeriesBennersView(AbstractGenericsAPIView):
    serializer_class = BannerSerializer
    queryset = Serie.objects.all()
    Model = Serie

    def get_queryset(self):
        Model = self.get_object(self.kwargs.get("pk"))
        dir= Model.dir+'\\banners'
        banners=[]
        if os.path.isdir(dir):
            list=os.listdir(dir)
            for photo in list:
                if photo.endswith(photo_ext):
                    banners.append(
                        {
                            "url": Model.web_dir + '/banners/' + photo
                        },
                    )
        else:
            return banners
        return banners

class SerieAdminPaginator(PageNumberPagination):
    page_size = 50
    page_size_query_param = 'page_size'
    max_page_size = 50

class SerieView(AbstractGenericsAPIView):
    serializer_class = SerieSerializer
    queryset = Serie.objects.all()
    filter_backends = [filters.DjangoFilterBackend]
    filterset_class  = SerieFilter
    order_by ='-added'

class SeriesTopView(Top):
    queryset = Serie.objects
    serializer_class = SerieSerializer

class AdminSerieView(SerieView):
    permission_classes = [IsAuthenticated]
    pagination_class = SerieAdminPaginator

class SelectOptionView(generics.ListAPIView):
    serializer_class = SerieSlectSerializer
    queryset = Serie.objects.all()

class SerieMoviesView(AbstractGenericsAPIView):
    serializer_class = MoviesSerializer
    queryset = Serie.objects.all()
    filter_backends = [filters.DjangoFilterBackend]
    filterset_class  = MovieFilter
    order_by ='-added'
    Model = Serie

    def get_queryset(self):
        Model = self.get_object(self.kwargs.get("pk"))
        return Model.movies.all()

    def get_object(self, pk):
        try:
            return self.Model.objects.get(pk=pk)
        except self.Model.DoesNotExist:
            raise Http404

class SeriesStarsView(AbstractGenericsAPIViewExtended):
    serializer_class = StarsSerializerTop
    queryset = Serie.objects.all()
    Model = Serie

    def filter_queryset(self):
        def count(id):
            count = 0
            for el in star_counter:
                if el == id:
                    count = count + 1
            return count
        stars = []
        star_counter = []
        Model = self.get_object(self.kwargs.get("pk"))
        for Movie in Model.movies.all():
            for Star in Movie.stars.all():
                star_counter.append(Star.id)
                if count(Star.id) > 2:
                    if Star not in stars:
                        stars.append(Star)
        return stars

    def get_object(self, pk):
        try:
            return self.Model.objects.get(pk=pk)
        except self.Model.DoesNotExist:
            raise Http404

class SerieDeteilsView(AbstractDeteilsView):
    serializer_class = SerieSerializerID
    queryset = Serie.objects
    Model = Serie

class SeriesRandomMovieView(AbstractDeteilsView):
    serializer_class = MoviesSerializer
    queryset = Serie.objects
    Model = Serie

    def get_queryset(self):
        return random.choice(self.query.movies.all())

class SerieUpdataView(AbstractUpdateView):
    serializer_class = SerieSerializerUpdate
    queryset = Serie.objects
    Model = Serie

#actions
class SerieAddToFavoriteView(SqlAction):
    serializer_class = SerieSerializer
    queryset = Serie.objects
    Model = Serie
    permission_classes = [IsAuthenticated]

    def exc_action_before_query(self):
        self.add_favorits()

class SerieAddToRatingView(SerieAddToFavoriteView):

    def exc_action_before_query(self):
        self.add_raiting()

class SerieAddToLikeView(SerieAddToFavoriteView):

    def exc_action_before_query(self):
        self.add_like()

class SerieAddToDisLikeView(SerieAddToFavoriteView):

    def exc_action_before_query(self):
        self.add_disLikes()

class SerieUpdateViewView(SerieAddToFavoriteView):

    def exc_action_before_query(self):
        self.update_views()

class AdminStatsSerieLiks(AbstractStats):
    serializer_class = StatsSerializer
    queryset = Likes.objects.all()
    Model = Serie
    place = 'likes'

class AdminStatsSerieDisLiks(AbstractStats):
    serializer_class = StatsSerializer
    queryset = DisLikess.objects.all()
    Model = Serie
    place = 'disLikes'

class AdminStatsSerieViews(AbstractStats):
    serializer_class = StatsSerializer
    queryset = Views.objects.all()
    Model = Serie
    place = 'views'

class AdminStatsSerieRatings(AbstractStats):
    serializer_class = RatingsSerializer
    queryset = Views.objects.all()
    Model = Serie
    place = 'ratings'

class SeriesTagsView(AbstractItems):
    serializer_class = TagsSerializer
    queryset = []
    Model = Serie
    place = 'tags'

class SerieAddTag(AddRelation):
    serializer_class = TagsSerializer
    queryset = Serie.objects
    Model = Serie
    object_index='tags'

