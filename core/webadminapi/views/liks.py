from core.webadminapi.core import AbstractDeteilsView
from core.wideocollectorseader.models import Producents,Serie,Star,Movie
from core.webadminapi.serializers import ProducentLiks,SeriesLiks,StarsLiks,MoviesLiks,ProducentDisLiks,MoviesDisLiks,SeriesDisLiks,StarsDisLiks

class LiksProducents(AbstractDeteilsView):

    serializer_class = ProducentLiks
    Model = Producents
    order_by = '-date_relesed'
    fovorite_item = "producents"

class LiksSeries(AbstractDeteilsView):

    serializer_class = SeriesLiks
    Model = Serie
    order_by = '-date_relesed'
    fovorite_item = "series"

class LiksStars(AbstractDeteilsView):

    serializer_class = StarsLiks
    Model = Star
    order_by = '-date_relesed'
    fovorite_item = "stars"

class LiksMovies(AbstractDeteilsView):

    serializer_class = MoviesLiks
    Model = Movie
    order_by  ='-date_relesed'
    fovorite_item = "movies"

class DisLiksProducents(AbstractDeteilsView):

    serializer_class = ProducentDisLiks
    Model = Producents
    order_by  ='-date_relesed'
    fovorite_item = "movies"

class DisLiksSeries(AbstractDeteilsView):

    serializer_class = SeriesDisLiks
    Model = Serie
    order_by = '-date_relesed'
    fovorite_item = "series"

class DisLiksStars(AbstractDeteilsView):

    serializer_class = StarsDisLiks
    Model = Star
    order_by = '-date_relesed'
    fovorite_item = "stars"

class DisLiksMovies(AbstractDeteilsView):

    serializer_class = MoviesDisLiks
    Model = Movie
    order_by  ='-date_relesed'
    fovorite_item = "movies"






