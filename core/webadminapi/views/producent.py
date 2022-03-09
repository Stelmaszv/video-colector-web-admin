import os
from django.http import Http404
from django_filters import rest_framework as filters
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from core.webadminapi.core import (AbstractDeteilsView,
                                   AbstractGenericsAPIView,
                                   AbstractGenericsAPIViewExtended,
                                   AbstractUpdateView,
                                   LargeResultsSetPagination,
                                   SqlAction, AbstractStats, AbstractItems, AddRelation)
from core.webadminapi.filters import ProducentsFilter
from core.webadminapi.serializers import (MoviesSerializer,
                                          PhotoSerializerSeries,
                                          ProducentsSerializer,
                                          ProducentsSerializerUpdate,
                                          ProducetFormSeralizer,
                                          SerieSerializer, StarsSerializer, StatsSerializer, RatingsSerializer,
                                          TagsSerializer)
from core.wideocollectorseader.models import Producents, Serie, Likes, DisLikess, Views
from rest_framework.pagination import PageNumberPagination


photo_ext = ('.png', '.jpg', '.jpeg', '.jfif', ".JPG")

class ProducentAdminPaginator(PageNumberPagination):
    page_size = 50
    page_size_query_param = 'page_size'
    max_page_size = 50

class ProducentsView(AbstractGenericsAPIView):
    serializer_class = ProducentsSerializer
    queryset = Producents.objects.all()
    filter_backends = [filters.DjangoFilterBackend]
    filterset_class  = ProducentsFilter
    order_by ='-added'

class AdminProducentsView(ProducentsView):
    permission_classes = [IsAuthenticated]
    pagination_class = ProducentAdminPaginator

class ProducentsPhotosView(AbstractGenericsAPIViewExtended):
    serializer_class = PhotoSerializerSeries
    queryset = Producents.objects.all()
    Model = Producents

    def filter_queryset(self):
        Model = self.get_object(self.kwargs.get("pk"))
        miandir=os.listdir(Model.dir+'\photo\DATA')
        photos=[]
        for photo in miandir:
            if photo.endswith(photo_ext):
                photos.append(
                    {
                     "url"     :   Model.dir+'\\'+photo,
                     "name"    :   Model.show_name
                     },
                )
        for Serie in Model.series.all():
            for Movie in Serie.movies.all():
                for photo in os.listdir(Movie.dir):
                    if photo.endswith(photo_ext):
                        photos.append(
                            {
                                "url": Movie.dir + '\\' + photo,
                                "name": Movie.show_name
                            },
                        )
        return photos

class ProducentsSeriesView(AbstractGenericsAPIView):

    serializer_class = SerieSerializer
    order_by ='-added'
    Model = Producents

    def get_queryset(self):
        Model = self.get_object(self.kwargs.get("pk"))
        return Model.series.all()

    def get_object(self, pk):
        try:
            return self.Model.objects.get(pk=pk)
        except self.Model.DoesNotExist:
            raise Http404

class ProducentsDeteilsView(AbstractDeteilsView):
    serializer_class = ProducentsSerializer
    queryset = Producents.objects
    Model = Producents

class ProducentsUpdataView(AbstractUpdateView):
    serializer_class = ProducentsSerializerUpdate
    queryset = Producents.objects
    Model = Producents

class ProducentsFormView(generics.ListAPIView):
    serializer_class = ProducetFormSeralizer
    queryset = Producents.objects.all()
    Model = Producents

class ProducentsMoviesView(AbstractGenericsAPIViewExtended):
    serializer_class = MoviesSerializer
    queryset = Producents.objects.all()
    Model = Producents

    def filter_queryset(self):
        movies =[]
        Model = self.get_object(self.kwargs.get("pk"))
        for Serie in Model.series.all():
            for Movie in Serie.movies.all():
                movies.append(Movie)
        return movies

class ProducentStarsView(AbstractGenericsAPIViewExtended):
    serializer_class = StarsSerializer
    queryset = Serie.objects.all()
    pagination_class = LargeResultsSetPagination
    Model = Producents

    def filter_queryset(self):
        def count(id):
            count=0
            for el in star_counter:
                if el == id:
                    count=count+1
            return count
        stars=[]
        star_counter=[]
        Model = self.get_object(self.kwargs.get("pk"))
        for Serie in Model.series.all():
            for Movie in Serie.movies.all():
                for Star in Movie.stars.all():
                    star_counter.append(Star.id)
                    if count(Star.id)>2:
                        if Star not in stars:
                            stars.append(Star)
        return stars

#actions
class ProducentAddToFavoriteView(SqlAction):
    serializer_class = ProducentsSerializer
    queryset = Producents.objects
    Model = Producents
    permission_classes = [IsAuthenticated]

    def exc_action_before_query(self):
        self.add_favorits()

class ProducentAddToRatingView(ProducentAddToFavoriteView):
    def exc_action_before_query(self):
        self.add_raiting()

class ProducentAddToLikeView(ProducentAddToFavoriteView):
    def exc_action_before_query(self):
        self.add_like()

class ProducentAddToDisLikeView(ProducentAddToFavoriteView):
    def exc_action_before_query(self):
        self.add_disLikes()

class ProducentUpdateViewsView(ProducentAddToFavoriteView):
    def exc_action_before_query(self):
        self.update_views()

class AdminStatsProducentLiks(AbstractStats):
    serializer_class = StatsSerializer
    queryset = Likes.objects.all()
    Model = Producents
    place = 'likes'

class AdminStatsProducentDisLiks(AbstractStats):
    serializer_class = StatsSerializer
    queryset = DisLikess.objects.all()
    Model = Producents
    place = 'disLikes'

class AdminStatsProducentViews(AbstractStats):
    serializer_class = StatsSerializer
    queryset = Views.objects.all()
    Model = Producents
    place = 'views'

class AdminStatsProducentRatings(AbstractStats):
    serializer_class = RatingsSerializer
    queryset = Views.objects.all()
    Model = Producents
    place = 'ratings'

class ProducentSeriesView(AbstractItems):
    serializer_class = SerieSerializer
    queryset = []
    Model = Producents
    RelationModel = Serie
    place = 'series'

class ProducentAddSerie(AddRelation):
    serializer_class = MoviesSerializer
    queryset = []
    Model = Producents
    object_index = 'series'

class ProducentTagsView(AbstractItems):
    serializer_class = TagsSerializer
    queryset = []
    Model = Producents
    place = 'tags'

class ProducentAddTag(AddRelation):
    serializer_class = ProducentsSerializer
    queryset = []
    Model = Producents
    object_index='tags'

