from core.wideocollectorseader.models import Movie
from django_filters import rest_framework as filters
class BaseFilter(filters.FilterSet):
    name = filters.CharFilter(lookup_expr='icontains')
    avg_rating = filters.CharFilter(lookup_expr='icontains')
    class Meta:
        model = Movie
        fields = '__all__'