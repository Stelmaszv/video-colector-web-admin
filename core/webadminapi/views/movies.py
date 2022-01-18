import os

from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated

from core.webadminapi.core import AbstractDeteilsView, AbstractUpdateView, AbstractGenericsAPIView, Authentication
from core.webadminapi.serializers import MoviesSerializer, PhotoSerializerMovie, MoviesSerializerUpdate
from core.wideocollectorseader.models import Movie, Favourite
from videocolectorwebadmin.global_setings import photo_ext

class MoviesView(AbstractGenericsAPIView):
    queryset = Movie.objects.all()
    serializer_class = MoviesSerializer

class MoviesWithStarsView(AbstractGenericsAPIView):
    serializer_class = MoviesSerializer
    Model = Movie

    def get_queryset(self):
        movies=[]
        Model = self.get_object(self.kwargs.get("pk"))
        for Star in Model.stars.all():
            for Movie in Star.movies.all():
                movies.append(Movie)
        return movies

class MovieDeteilsView(AbstractDeteilsView):
    serializer_class = MoviesSerializer
    queryset = Movie.objects
    Model = Movie

class MovieAddToFavoriteView(AbstractDeteilsView):
    serializer_class = MoviesSerializer
    queryset = Movie.objects
    Model = Movie
    authentication_classes = (SessionAuthentication, Authentication,)
    permission_classes = [IsAuthenticated]

    def exc_action_before_query(self):
        self.add_favorits()

class MovieAddToRatingView(AbstractDeteilsView):
    serializer_class = MoviesSerializer
    queryset = Movie.objects
    Model = Movie
    authentication_classes = (SessionAuthentication, Authentication,)
    permission_classes = [IsAuthenticated]

    def exc_action_before_query(self):
        self.add_raiting()

class MovieNextInSeriesView(AbstractDeteilsView):
    serializer_class = MoviesSerializer
    queryset = Movie.objects
    Model = Movie

    def get_queryset(self):
        index=0
        found=0
        for Movie in self.query.serie.movies.all():
            if Movie.id == self.query.id:
                found=index
            if found+1 <= len(self.query.serie.movies.all()):
                if index == found+1:
                    return Movie
            else:
                return self.query.serie.movies[0]
            index=index+1

class MoviePhotosView(AbstractGenericsAPIView):
    serializer_class = PhotoSerializerMovie
    queryset = Movie.objects.all()
    Model = Movie

    def get_queryset(self):
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