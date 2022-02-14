import os

from django_filters import rest_framework as filters
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated

from core.webadminapi.core import (AbstractDeteilsView,
                                   AbstractGenericsAPIView,
                                   AbstractGenericsAPIViewExtended,
                                   AbstractUpdateView, Authentication)
from core.webadminapi.filters import MovieFilter
from core.webadminapi.serializers import (MoviesSerializer,
                                          MoviesSerializerUpdate,
                                          PhotoSerializerMovie,
                                          MoviesRatingView,
                                          MoviesLiksView,
                                          MoviesDisLiksView,
                                          MoviesViewsView)
from core.wideocollectorseader.models import Movie
from videocolectorwebadmin.global_setings import photo_ext
from core.webadminapi.core import SqlAction


class MoviesView(AbstractGenericsAPIView):
    queryset = Movie.objects.all()
    serializer_class = MoviesSerializer
    filter_backends = [filters.DjangoFilterBackend]
    filterset_class  = MovieFilter
    order_by ='-date_relesed'

class MoviesWithStarsView(AbstractGenericsAPIViewExtended):
    serializer_class = MoviesSerializer
    filter_backends = [filters.DjangoFilterBackend]
    filterset_class  = MovieFilter
    queryset = Movie.objects.all()
    Model = Movie
    order_by ='-date_relesed'

    def filter_queryset(self):
        Movies=[]
        Model = self.get_object(self.kwargs.get("pk"))
        for Star in Model.stars.all():
            for Movie in Star.movies.all():
                Movies.append(Movie)
        return Movies

class MovieDeteilsView(AbstractDeteilsView):
    serializer_class = MoviesSerializer
    queryset = Movie.objects
    Model = Movie

class MovieAddToRatingView(SqlAction):

    serializer_class = MoviesSerializer
    queryset = Movie.objects
    Model = Movie
    permission_classes = [IsAuthenticated]

    def exc_action_before_query(self):
        self.add_raiting()

class MovieAddToLikeView(MovieAddToRatingView):
    serializer_class = MoviesSerializer

    def exc_action_before_query(self):
        self.add_like()

class MovieAddToDisLikeView(MovieAddToRatingView):

    serializer_class = MoviesSerializer

    def exc_action_before_query(self):
        self.add_disLikes()

class MovieUpdateViewsView(MovieAddToRatingView):

    serializer_class = MoviesSerializer

    def exc_action_before_query(self):
        self.update_views()

class MovieNextInSeriesView(AbstractDeteilsView):
    serializer_class = MoviesSerializer
    queryset = Movie.objects
    Model = Movie

    def get_queryset(self):
        index = 0
        found = 0
        Model = self.get_object(self.kwargs.get("pk"))
        for Movie in Model.serie.movies.all():
            if Movie.id ==  Model.id:
                found = index+1
            index = index + 1
        index=0
        for Movie in Model.serie.movies.all():
            if index==found:
                return Movie
            index = index + 1

class MoviePhotosView(AbstractGenericsAPIViewExtended):
    serializer_class = PhotoSerializerMovie
    queryset = Movie.objects.all()
    Model = Movie

    def filter_queryset(self):
        Model = self.get_object(self.kwargs.get("pk"))
        photo=[]
        for item in os.listdir(Model.dir):
            if item.endswith(photo_ext):
                photo.append(
                    {"url"     :   Model.dir+'\\'+item}
                )
        return photo

class MovieUpdataView(AbstractUpdateView):
    serializer_class = MoviesSerializerUpdate
    queryset = Movie.objects
    Model = Movie