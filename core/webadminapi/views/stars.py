import os

from django.http import Http404
from django_filters import rest_framework as filters
from rest_framework import generics
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import IsAuthenticated

from core.webadminapi.core import (AbstractDeteilsView,
                                   AbstractGenericsAPIView,
                                   AbstractGenericsAPIViewExtended,
                                   AbstractUpdateView, SqlAction, AbstractStats, AbstractItems, AddRelation,Top)
from core.webadminapi.filters import StarFilter, MovieFilter
from core.webadminapi.serializers import (MoviesSerializer,
                                          PhotoSerializerMovie,
                                          StarSlectSerializer, StarsSerializer,
                                          StarsSerializerUpdate, StatsSerializer, RatingsSerializer, TagsSerializer)
from core.wideocollectorseader.models import Star, DisLikess, Views, Likes, Movie
from videocolectorwebadmin.global_setings import photo_ext


class StarsPaginator(PageNumberPagination):
    page_size = 20
    page_size_query_param = 'page_size'
    max_page_size = 10

class AdminStarsPaginator(PageNumberPagination):
    page_size = 50
    page_size_query_param = 'page_size'
    max_page_size = 50


class StarsTopView(Top):
    queryset = Star.objects
    serializer_class = StarsSerializer

class StarsMoviesView(AbstractGenericsAPIView):
    serializer_class = MoviesSerializer
    filter_backends = [filters.DjangoFilterBackend]
    filterset_class  = MovieFilter
    queryset = Movie.objects
    order_by ='-date_relesed'
    Model = Star

    def get_queryset(self):
        Model = self.get_object(self.kwargs.get("pk"))
        return Model.movies.all()

    def get_object(self, pk):
        try:
            return self.Model.objects.get(pk=pk)
        except self.Model.DoesNotExist:
            raise Http404


class StarsPhotoView(AbstractGenericsAPIViewExtended):
    serializer_class = PhotoSerializerMovie
    queryset = Star.objects
    Model = Star

    def filter_queryset(self):
        photo=[]
        Model = self.get_object(self.kwargs.get("pk"))
        star_dir = os.listdir(Model.dir+'/photo/DATA')
        for photo_item in star_dir:
            if photo_item.endswith(photo_ext):
                photo.append(
                    {"url"  :Model.dir+'\\photo\\DATA\\' + photo_item}
                )
        for Movie in Model.movies.all():
            list=os.listdir(Movie.dir)
            for item in list:
                if item.endswith(photo_ext):
                    photo.append(
                        {"url": Movie.dir + '\\' + item}
                    )

        return photo

class StarDeteilsView(AbstractDeteilsView):
    serializer_class = StarsSerializer
    queryset = Star.objects
    Model = Star

class StarView(AbstractGenericsAPIView):
    serializer_class = StarsSerializer
    queryset = Star.objects.all()
    filter_backends = [filters.DjangoFilterBackend]
    filterset_class  = StarFilter
    order_by ='-added'
    pagination_class = StarsPaginator

class AdminStarView(StarView):
    pagination_class = AdminStarsPaginator
    permission_classes = [IsAuthenticated]

class StarUpdateView(AbstractUpdateView):
    serializer_class = StarsSerializerUpdate
    queryset = Star.objects
    Model = Star

class StarSelectOptionView(generics.ListAPIView):
    serializer_class = StarSlectSerializer
    queryset = Star.objects.all()

#actions
class StarAddToFavoriteView(SqlAction):
    serializer_class = StarsSerializer
    queryset = Star.objects
    Model = Star
    permission_classes = [IsAuthenticated]

    def exc_action_before_query(self):
        self.add_favorits()

class StarAddToRatingView(StarAddToFavoriteView):

    def exc_action_before_query(self):
        self.add_raiting()

class StarAddToLikeView(StarAddToFavoriteView):

    def exc_action_before_query(self):
        self.add_like()

class StarAddToDisLikeView(StarAddToFavoriteView):

    def exc_action_before_query(self):
        self.add_disLikes()

class StarUpdateViewsView(StarAddToFavoriteView):

    def exc_action_before_query(self):
        self.update_views()

class AdminStatsStarLiks(AbstractStats):
    serializer_class = StatsSerializer
    queryset = Likes.objects.all()
    Model = Star
    place = 'likes'

class AdminStatsStarDisLiks(AbstractStats):
    serializer_class = StatsSerializer
    queryset = DisLikess.objects.all()
    Model = Star
    place = 'disLikes'

class AdminStatsStarViews(AbstractStats):
    serializer_class = StatsSerializer
    queryset = Views.objects.all()
    Model = Star
    place = 'views'

class AdminStatsStareRatings(AbstractStats):
    serializer_class = RatingsSerializer
    queryset = Views.objects.all()
    Model = Star
    place = 'ratings'

class StarTagsView(AbstractItems):
    serializer_class = TagsSerializer
    queryset = []
    Model = Star
    place = 'tags'

class AddStarTag(AddRelation):
    serializer_class = StarsSerializer
    queryset = []
    Model = Star
    object_index='tags'











