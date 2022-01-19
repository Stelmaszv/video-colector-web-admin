import os
from rest_framework.authentication import SessionAuthentication
from django_filters import rest_framework as filters
from rest_framework.permissions import IsAuthenticated
from core.webadminapi.core import AbstractDeteilsView, AbstractUpdateView, AbstractGenericsAPIView, Authentication
from core.webadminapi.filters import SerieFilter
from core.webadminapi.serializers import SerieSerializer, MoviesSerializer, StarsSerializer, SerieSerializerUpdate, \
    PhotoSerializerSeries, BannerSerializer
from core.wideocollectorseader.models import Serie
from videocolectorwebadmin.global_setings import photo_ext
import random

class SeriesPhotosView(AbstractGenericsAPIView):
    serializer_class = PhotoSerializerSeries
    queryset = Serie.objects.all()
    Model = Serie

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
        for Movie in Model.movies.all():
            for photo in os.listdir(Movie.dir):
                if photo.endswith(photo_ext):
                    photos.append(
                        {
                            "url": Movie.dir + '\\' + photo,
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
                            "url": Model.dir + '\\' + photo
                        },
                    )
        else:
            return banners
        return banners

class SerieView(AbstractGenericsAPIView):
    serializer_class = SerieSerializer
    queryset = Serie.objects.all()
    filter_backends = [filters.DjangoFilterBackend]
    filterset_class  = SerieFilter
    order_by ='-added'

class SerieMoviesView(AbstractGenericsAPIView):
    serializer_class = MoviesSerializer
    queryset = Serie.objects.all()
    Model = Serie

    def get_queryset(self):
        Model = self.get_object(self.kwargs.get("pk"))
        return Model.movies.all()

class SeriesStarsView(AbstractGenericsAPIView):
    serializer_class = StarsSerializer
    queryset = Serie.objects.all()
    Model = Serie

    def get_queryset(self):
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

class SerieDeteilsView(AbstractDeteilsView):
    serializer_class = SerieSerializer
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
class SerieAddToFavoriteView(AbstractDeteilsView):
    serializer_class = SerieSerializer
    queryset = Serie.objects
    Model = Serie
    authentication_classes = (SessionAuthentication, Authentication,)
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