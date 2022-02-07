from django_filters import rest_framework as filters

from core.wideocollectorseader.models import Movie, Producents, Serie, Star


class MovieFilter(filters.FilterSet):
    name = filters.CharFilter(lookup_expr='icontains')
    avg_rating = filters.CharFilter(lookup_expr='icontains')
    class Meta:
        model = Movie
        fields = '__all__'

class StarFilter(filters.FilterSet):
    name = filters.CharFilter(lookup_expr='icontains')
    avg_rating = filters.CharFilter(lookup_expr='icontains')
    class Meta:
        model = Star
        fields = '__all__'

class SerieFilter(filters.FilterSet):
    name = filters.CharFilter(lookup_expr='icontains')
    avg_rating = filters.CharFilter(lookup_expr='icontains')
    class Meta:
        model = Serie
        fields = '__all__'

class ProducentsFilter(filters.FilterSet):
    name = filters.CharFilter(lookup_expr='icontains')
    avg_rating = filters.CharFilter(lookup_expr='icontains')
    class Meta:
        model = Producents
        fields = '__all__'