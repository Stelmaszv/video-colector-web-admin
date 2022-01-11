from rest_framework.response import Response
from rest_framework import generics
from rest_framework.pagination import PageNumberPagination
from core.webadminapi.serializers import MoviesSerializer, StarsSerializer, ProducentsSerializer, SerieSerializer, \
    TagsSerializer, MoviesSerializerUpdate
from core.wideocollectorseader.models import Movie,Star,Producents,Serie,Tag
from django.http import Http404
from rest_framework.views import APIView
from rest_framework import status, viewsets

class MoviesView(generics.ListAPIView):
    serializer_class = MoviesSerializer
    queryset = Movie.objects.all()
    pagination_class = PageNumberPagination

class StarView(generics.ListAPIView):
    serializer_class = StarsSerializer
    queryset = Star.objects.all()
    pagination_class = PageNumberPagination

class ProducentsView(generics.ListAPIView):
    serializer_class = ProducentsSerializer
    queryset = Producents.objects.all()
    pagination_class = PageNumberPagination

class SerieView(generics.ListAPIView):
    serializer_class = SerieSerializer
    queryset = Serie.objects.all()
    pagination_class = PageNumberPagination

class TagView(generics.ListAPIView):
    serializer_class = TagsSerializer
    queryset = Tag.objects.all()
    pagination_class = PageNumberPagination

class AbstractItemView(APIView):

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

class MovieDeteilsView(AbstractItemView):
    serializer_class = MoviesSerializer
    queryset = Movie.objects
    Model = Movie

class MovieUpdataView(AbstractItemView):
    serializer_class = MoviesSerializerUpdate
    queryset = Movie.objects
    Model = Movie

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



























class AbstractDetailView(APIView):

    Model = None
    Serializer=None

    def get_object(self, pk):
        try:
            return self.Model.objects.get(pk=pk)
        except self.Model.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = self.Serializer(snippet)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = self.Serializer(snippet, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        snippet = self.get_object(pk)
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


