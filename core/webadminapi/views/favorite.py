from core.webadminapi.core import FavoritsList
from core.webadminapi.filters import MovieFilter
from core.webadminapi.serializers import MoviesSerializer
from core.wideocollectorseader.models import Movie, UserFavorits as UserFavoritsModel
from django_filters import rest_framework as filters

class FavoritsMovies(FavoritsList):
    queryset = Movie.objects.all()
    serializer_class = MoviesSerializer
    filter_backends = [filters.DjangoFilterBackend]
    filterset_class  = MovieFilter
    order_by ='-date_relesed'
    fovorite_item="movies"