from core.wideocollectorseader.models import Movie
from django_filters import rest_framework as filters
class MovieFilter(filters.FilterSet):
    name = filters.CharFilter(lookup_expr='icontains')
    class Meta:
        model = Movie
        fields = ['name','tags','stars','country']