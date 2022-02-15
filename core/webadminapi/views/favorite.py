from core.webadminapi.core import FavoritsList
from core.webadminapi.filters import MovieFilter
from core.webadminapi.serializers import MoviesSerializer, StarsSerializer,SerieSerializer,ProducentsSerializer
from django_filters import rest_framework as filters

class FavoritsMovies(FavoritsList):
    serializer_class = MoviesSerializer
    filter_backends = [filters.DjangoFilterBackend]
    filterset_class  = MovieFilter
    order_by ='-date_relesed'
    fovorite_item="movies"

class FavoritsStars(FavoritsList):
    serializer_class = StarsSerializer
    order_by ='-date_relesed'
    fovorite_item="stars"

class FavoritsSeries(FavoritsList):
    serializer_class = SerieSerializer
    order_by ='-date_relesed'
    fovorite_item="series"

class FavoritsProducents(FavoritsList):
    serializer_class = ProducentsSerializer
    order_by ='-date_relesed'
    fovorite_item="producents"