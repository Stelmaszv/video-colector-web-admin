from core.webadminapi.core import FavoritsList, FavoritsAdd, AbstractDeteilsView
from core.webadminapi.filters import MovieFilter
from core.webadminapi.serializers import MoviesSerializer, StarsSerializer,SerieSerializer,ProducentsSerializer,MoviesFavorit
from django_filters import rest_framework as filters
from core.wideocollectorseader.models import Movie,Star,Serie,Producents

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

class FavoritsAddMovie(FavoritsAdd):
    serializer_class = MoviesSerializer
    Model = Movie
    fovorite_item = "movies"

class FavoritsAddStar(FavoritsAdd):
    serializer_class = StarsSerializer
    Model = Star
    fovorite_item = "stars"

class FavoritsAddSerie(FavoritsAdd):
    serializer_class = SerieSerializer
    order_by ='-date_relesed'
    Model = Serie
    fovorite_item="series"

class FavoritsAddProducent(FavoritsAdd):
    serializer_class = ProducentsSerializer
    order_by ='-date_relesed'
    Model = Producents
    fovorite_item="producents"

class FavoritsIsMovies(AbstractDeteilsView):
    serializer_class = MoviesFavorit
    Model = Movie
    order_by ='-date_relesed'
    fovorite_item="movies"