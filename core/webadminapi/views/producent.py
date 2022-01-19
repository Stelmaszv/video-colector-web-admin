import os
from rest_framework import generics
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated
from django_filters import rest_framework as filters
from core.webadminapi.core import AbstractDeteilsView, AbstractUpdateView, AbstractGenericsAPIView, Authentication
from core.webadminapi.filters import ProducentsFilter
from core.webadminapi.serializers import ProducentsSerializer, PhotoSerializerSeries, ProducentsSerializerUpdate, \
    MoviesSerializer, StarsSerializer
from core.wideocollectorseader.models import Producents, Serie

photo_ext = ('.png', '.jpg', '.jpeg', '.jfif', ".JPG")

class ProducentsView(generics.ListAPIView):
    serializer_class = ProducentsSerializer
    queryset = Producents.objects.all()
    filter_backends = [filters.DjangoFilterBackend]
    filterset_class  = ProducentsFilter
    order_by ='-added'

class ProducentsPhotosView(AbstractGenericsAPIView):
    serializer_class = PhotoSerializerSeries
    queryset = Producents.objects.all()
    Model = Producents

    def get_queryset(self):
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

class ProducentsDeteilsView(AbstractDeteilsView):
    serializer_class = ProducentsSerializer
    queryset = Producents.objects
    Model = Producents

class ProducentsUpdataView(AbstractUpdateView):
    serializer_class = ProducentsSerializerUpdate
    queryset = Producents.objects
    Model = Producents

class ProducentsMoviesView(AbstractGenericsAPIView):
    serializer_class = MoviesSerializer
    queryset = Producents.objects.all()
    Model = Producents

    def get_queryset(self):
        movies =[]
        Model = self.get_object(self.kwargs.get("pk"))
        for Serie in Model.series.all():
            for Movie in Serie.movies.all():
                movies.append(Movie)
        return movies

class ProducentStarsView(AbstractGenericsAPIView):
    serializer_class = StarsSerializer
    queryset = Serie.objects.all()
    Model = Producents

    def get_queryset(self):
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
class ProducentAddToFavoriteView(AbstractDeteilsView):
    serializer_class = ProducentsSerializer
    queryset = Producents.objects
    Model = Producents
    authentication_classes = (SessionAuthentication, Authentication,)
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