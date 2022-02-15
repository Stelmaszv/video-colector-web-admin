import os
from django_filters import rest_framework as filters
from rest_framework.permissions import IsAuthenticated

from core.webadminapi.core import (AbstractDeteilsView,
                                   AbstractGenericsAPIView,
                                   AbstractGenericsAPIViewExtended,
                                   AbstractUpdateView)
from core.webadminapi.filters import MovieFilter
from core.webadminapi.serializers import (MoviesSerializer,
                                          MoviesSerializerUpdate,
                                          PhotoSerializerMovie)
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

    def exc_action_before_query(self,user):
        self.add_raiting()

class MovieAddToLikeView(MovieAddToRatingView):
    serializer_class = MoviesSerializer

    def exc_action_before_query(self,user):
        self.add_like()

class MovieAddToDisLikeView(MovieAddToRatingView):

    serializer_class = MoviesSerializer

    def exc_action_before_query(self,user):
        self.add_disLikes()

class MovieUpdateViewsView(MovieAddToRatingView):

    serializer_class = MoviesSerializer

    def exc_action_before_query(self,user):
        self.update_views()

class MovieNextInSeriesView(AbstractDeteilsView):
    serializer_class = MoviesSerializer
    queryset = Movie.objects
    Model = Movie

    def get_queryset(self):
        index = 0
        found = 0
        ReturnMovie=None
        Model = self.get_object(self.kwargs.get("pk"))
        for Movie in Model.serie.movies.all():
            if Movie.id ==  Model.id:
                found = index+1
            index = index + 1
        index=0
        for Movie in Model.serie.movies.all():
            if index==found:
                ReturnMovie=Movie
            index = index + 1
        if ReturnMovie is None:
            return Model.serie.movies.all()[0]
        return ReturnMovie

class MovieNextWithStarView(AbstractDeteilsView):
    serializer_class = MoviesSerializer
    queryset = Movie.objects
    Model = Movie

    def get_queryset(self):
        StarOBJ=None
        ReturnMovie = None
        index = 0
        found = 0
        Model = self.get_object(self.kwargs.get("pk"))
        star=self.request.GET.get('star')
        for Star in Model.stars.all():
            if (Star.id==int(star)):
                StarOBJ=Star

        for Movie in StarOBJ.movies.all():
            if Movie.id == int(self.kwargs.get("pk")):
                found = index + 1
            index = index + 1
        index = 0
        for Movie in StarOBJ.movies.all():
            if index==found:
                ReturnMovie = Movie
            index = index + 1
        if ReturnMovie is None:
            return Model.serie.movies.all()[0]
        return ReturnMovie

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