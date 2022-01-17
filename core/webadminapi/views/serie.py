import os
from rest_framework.pagination import PageNumberPagination
from core.webadminapi.core import AbstractDeteilsView, AbstractUpdateView, AbstractGenericsAPIView
from core.webadminapi.serializers import SerieSerializer, MoviesSerializer, StarsSerializer, SerieSerializerUpdate, \
    PhotoSerializerSeries
from core.wideocollectorseader.models import Serie, Movie
from videocolectorwebadmin.global_setings import photo_ext
import random

class SeriesPhotosView(AbstractGenericsAPIView):
    serializer_class = PhotoSerializerSeries
    queryset = Serie.objects.all()
    pagination_class = PageNumberPagination
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

class SerieView(AbstractGenericsAPIView):
    serializer_class = SerieSerializer
    queryset = Serie.objects.all()
    pagination_class = PageNumberPagination

class SerieMoviesView(AbstractGenericsAPIView):
    serializer_class = MoviesSerializer
    queryset = Serie.objects.all()
    pagination_class = PageNumberPagination
    Model = Serie

    def get_queryset(self):
        Model = self.get_object(self.kwargs.get("pk"))
        return Model.movies.all()

class SeriesStarsView(AbstractGenericsAPIView):
    serializer_class = StarsSerializer
    queryset = Serie.objects.all()
    pagination_class = PageNumberPagination
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