import os

from rest_framework.response import Response
from rest_framework import generics
from rest_framework.pagination import PageNumberPagination
from core.webadminapi.serializers import MoviesSerializer, StarsSerializer, ProducentsSerializer, SerieSerializer, \
    TagsSerializer, MoviesSerializerUpdate, StarsSerializerUpdate, SerieSerializerUpdate, ProducentsSerializerUpdate, \
    PhotoSerializerMovie, PhotoSerializerSeries
from core.wideocollectorseader.models import Movie,Star,Producents,Serie,Tag
from django.http import Http404
from rest_framework.views import APIView
from rest_framework import status
photo_ext = ('.png', '.jpg', '.jpeg', '.jfif', ".JPG")

class AbstractDeteilsView(APIView):

    Model=None
    queryset = []
    serializer_class=None

    def get_object(self, pk):
        try:
            return self.Model.objects.get(pk=pk)
        except self.Model.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = self.serializer_class(snippet)
        return Response(serializer.data)

class AbstractUpdateView(AbstractDeteilsView):

    Model=None
    queryset = []
    serializer_class=None

    def put(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = self.serializer_class(snippet, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        snippet = self.get_object(pk)
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class MoviesView(generics.ListAPIView):
    serializer_class = MoviesSerializer
    queryset = Movie.objects.all()
    pagination_class = PageNumberPagination

class MoviesWithStarsView(generics.ListAPIView):
    serializer_class = MoviesSerializer
    Model = Movie

    def get_object(self, pk):
        try:
            return self.Model.objects.get(pk=pk)
        except self.Model.DoesNotExist:
            raise Http404

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

class MoviePhotosView(generics.ListAPIView):
    serializer_class = PhotoSerializerMovie
    queryset = Movie.objects.all()
    pagination_class = PageNumberPagination
    Model = Movie

    def get_object(self, pk):
        try:
            return self.Model.objects.get(pk=pk)
        except self.Model.DoesNotExist:
            raise Http404

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

class StarDeteilsView(AbstractDeteilsView):
    serializer_class = StarsSerializer
    queryset = Star.objects
    Model = Star

class StarView(generics.ListAPIView):
    serializer_class = StarsSerializer
    queryset = Star.objects.all()
    pagination_class = PageNumberPagination

class StarUpdateView(AbstractUpdateView):
    serializer_class = StarsSerializerUpdate
    queryset = Star.objects
    Model = Star

class SerieView(generics.ListAPIView):
    serializer_class = SerieSerializer
    queryset = Serie.objects.all()
    pagination_class = PageNumberPagination


class SerieMoviesView(generics.ListAPIView):
    serializer_class = MoviesSerializer
    queryset = Serie.objects.all()
    pagination_class = PageNumberPagination
    Model = Serie

    def get_object(self, pk):
        try:
            return self.Model.objects.get(pk=pk)
        except self.Model.DoesNotExist:
            raise Http404

    def get_queryset(self):
        Model = self.get_object(self.kwargs.get("pk"))
        return Model.movies.all()

class SeriesStarsView(generics.ListAPIView):
    serializer_class = StarsSerializer
    queryset = Serie.objects.all()
    pagination_class = PageNumberPagination
    Model = Serie

    def get_object(self, pk):
        try:
            return self.Model.objects.get(pk=pk)
        except self.Model.DoesNotExist:
            raise Http404

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

class SerieUpdataView(AbstractUpdateView):
    serializer_class = SerieSerializerUpdate
    queryset = Serie.objects
    Model = Serie

class PhotosSeriesView(generics.ListAPIView):
    serializer_class = PhotoSerializerSeries
    queryset = Serie.objects.all()
    pagination_class = PageNumberPagination
    Model = Serie

    def get_object(self, pk):
        try:
            return self.Model.objects.get(pk=pk)
        except self.Model.DoesNotExist:
            raise Http404

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

class ProducentsView(generics.ListAPIView):
    serializer_class = ProducentsSerializer
    queryset = Producents.objects.all()
    pagination_class = PageNumberPagination


class ProducentsPhotosView(generics.ListAPIView):
    serializer_class = PhotoSerializerSeries
    queryset = Producents.objects.all()
    pagination_class = PageNumberPagination
    Model = Producents

    def get_object(self, pk):
        try:
            return self.Model.objects.get(pk=pk)
        except self.Model.DoesNotExist:
            raise Http404

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

class ProducentsMoviesView(generics.ListAPIView):
    serializer_class = MoviesSerializer
    queryset = Producents.objects.all()
    pagination_class = PageNumberPagination
    Model = Producents

    def get_object(self, pk):
        try:
            return self.Model.objects.get(pk=pk)
        except self.Model.DoesNotExist:
            raise Http404

    def get_queryset(self):
        movies =[]
        Model = self.get_object(self.kwargs.get("pk"))
        for Serie in Model.series.all():
            for Movie in Serie.movies.all():
                movies.append(Movie)
        return movies

class ProducentStarsView(generics.ListAPIView):
    serializer_class = StarsSerializer
    queryset = Serie.objects.all()
    pagination_class = PageNumberPagination
    Model = Producents

    def get_object(self, pk):
        try:
            return self.Model.objects.get(pk=pk)
        except self.Model.DoesNotExist:
            raise Http404

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

class TagDeteilsView(AbstractUpdateView):
    serializer_class = TagsSerializer
    queryset = Tag.objects
    Model = Tag

class TagView(generics.ListAPIView):
    serializer_class = TagsSerializer
    queryset = Tag.objects.all()
    pagination_class = PageNumberPagination

























