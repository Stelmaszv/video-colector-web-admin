from rest_framework import generics
from rest_framework.pagination import PageNumberPagination
from core.webadminapi.serializers import MoviesSerializer, StarsSerializer,ProducentsSerializer
from core.wideocollectorseader.models import Movie,Star,Producents

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
