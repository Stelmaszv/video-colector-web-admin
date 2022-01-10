from rest_framework import generics
from rest_framework.pagination import PageNumberPagination
from core.webadminapi.serializers import MoviesSerializer, StarsSerializer
from core.wideocollectorseader.models import Movie,Star

class MoviesView(generics.ListAPIView):
    serializer_class = MoviesSerializer
    queryset = Movie.objects.all()
    pagination_class = PageNumberPagination

class StarView(generics.ListAPIView):
    serializer_class = StarsSerializer
    queryset = Star.objects.all()
    pagination_class = PageNumberPagination
