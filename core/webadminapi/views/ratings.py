from core.webadminapi.core import AbstractDeteilsView
from core.wideocollectorseader.models import Producents,Serie,Star,Movie
from core.webadminapi.serializers import ProducentRating,SeriesRating,StarsRating,MoviesRating

class RatingProducentsView(AbstractDeteilsView):

    serializer_class = ProducentRating
    Model = Producents
    order_by  ='-date_relesed'
    fovorite_item = "movies"

class RatingSeriesView(AbstractDeteilsView):

    serializer_class = SeriesRating
    Model = Serie
    order_by = '-date_relesed'
    fovorite_item = "series"

class RatingStarssView(AbstractDeteilsView):

    serializer_class = StarsRating
    Model = Star
    order_by = '-date_relesed'
    fovorite_item = "stars"

class RatingMoviesView(AbstractDeteilsView):

    serializer_class = MoviesRating
    Model = Movie
    order_by  ='-date_relesed'
    fovorite_item = "movies"
