import os
from rest_framework import generics
from rest_framework.pagination import PageNumberPagination
from core.webadminapi.core import AbstractDeteilsView, AbstractUpdateView, AbstractGenericsAPIView
from core.webadminapi.serializers import MoviesSerializer, PhotoSerializerMovie, MoviesSerializerUpdate
from core.wideocollectorseader.models import Movie
from videocolectorwebadmin.global_setings import photo_ext

class MoviesView(generics.ListAPIView):
    serializer_class = MoviesSerializer
    queryset = Movie.objects.all()
    pagination_class = PageNumberPagination

class MoviesWithStarsView(AbstractGenericsAPIView):
    serializer_class = MoviesSerializer
    Model = Movie

    def get_queryset(self):
        movies=[]
        Model = self.get_object(self.kwargs.get("pk"))
        for Star in Model.stars.all():
            for Movie in Star.movies.all():
                movies.append(Movie)
        return movies


class MovieDeteilsView(AbstractDeteilsView):
    serializer_class = MoviesSerializer
    queryset = Movie.objects
    Model = Movie

class MoviePhotosView(AbstractGenericsAPIView):
    serializer_class = PhotoSerializerMovie
    queryset = Movie.objects.all()
    pagination_class = PageNumberPagination
    Model = Movie

    def get_queryset(self):
        Model = self.get_object(self.kwargs.get("pk"))
        photo=[]
        for item in os.listdir(Model.dir):
            if item.endswith(photo_ext):
                photo.append(
                    {"url"     :   Model.dir+'\\'+item}
                )
        return photo

class MovieUpdataView(AbstractUpdateView):
    serializer_class = MoviesSerializerUpdate
    queryset = Movie.objects
    Model = Movie