from rest_framework import generics
from rest_framework import status
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination
from core.webadminapi.serializers import MoviesSerializer
from core.wideocollectorseader.models import Movie

class MoviesView(generics.ListAPIView):
    serializer_class = MoviesSerializer
    queryset = Movie.objects.all()
    pagination_class = PageNumberPagination
