import os
import string
import random
from django_filters import rest_framework as filters
from rest_framework.permissions import IsAuthenticated

from core.webadminapi.core import (AbstractDeteilsView,
                                   AbstractGenericsAPIView,
                                   AbstractGenericsAPIViewExtended,
                                   AbstractUpdateView,
                                   AbstractStats,
                                   AbstractItems,
                                   AddRelation)
from core.webadminapi.filters import MovieFilter
from core.webadminapi.serializers import (MoviesSerializer,
                                          MoviesSerializerUpdate,
                                          PhotoSerializerMovie,
                                          StatsSerializer,
                                          RatingsSerializer,
                                          StarsSerializer)
from core.wideocollectorseader.models import Movie,Likes,DisLikess,Views
from videocolectorwebadmin.global_setings import photo_ext
from core.webadminapi.core import SqlAction
from rest_framework.pagination import PageNumberPagination
from moviepy.editor import VideoFileClip



class MoviesView(AbstractGenericsAPIView):
    queryset = Movie.objects.all()
    serializer_class = MoviesSerializer
    filter_backends = [filters.DjangoFilterBackend]
    filterset_class  = MovieFilter
    order_by ='-date_relesed'

class MoviesAdminPaginator(PageNumberPagination):
    page_size = 50
    page_size_query_param = 'page_size'
    max_page_size = 50

class AdminMoviesView(MoviesView):
    permission_classes = [IsAuthenticated]
    pagination_class = MoviesAdminPaginator

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


class AdminGaleryDelete(MoviePhotosView):

    permission_classes = [IsAuthenticated]

    def delete_action(self, delete):
        os.remove(delete)

class AdminGaleryGenerateMoviecap(MoviePhotosView):

    procent_limt = 96

    def set_round_number(self, clip):
        duration = int(clip.duration)
        round_nomber = random.randint(0, int(clip.duration))
        procent = int(round_nomber / duration * 100)
        if procent <= self.procent_limt:
            return round_nomber
        else:
            return self.set_round_number(clip)

    def random(self,length) -> str:
        letters = string.ascii_lowercase
        result_str = ''.join(random.choice(letters) for i in range(length))
        return result_str

    def genrate(self,number_of_genarearion,id):
        Obj=Movie.objects.get(id=id)
        clip = VideoFileClip(Obj.web_src)
        for frame in range(0, int(number_of_genarearion)):
            clip.save_frame(Obj.web_dir + '\\' + str(self.random(20)) + '.png',
                            t=self.set_round_number(clip))
            mess = 'creating photos for ' + Obj.name + ' ' + str(frame + 1) + '/' + str(number_of_genarearion)
            print(mess)

class AdminStatsMovieLiks(AbstractStats):
    serializer_class = StatsSerializer
    queryset = Likes.objects.all()
    Model = Movie
    place = 'likes'

class AdminStatsMovieDisLiks(AbstractStats):
    serializer_class = StatsSerializer
    queryset = DisLikess.objects.all()
    Model = Movie
    place = 'disLikes'

class AdminStatsMovieViews(AbstractStats):
    serializer_class = StatsSerializer
    queryset = Views.objects.all()
    Model = Movie
    place = 'views'

class AdminStatsMovieRatings(AbstractStats):
    serializer_class = RatingsSerializer
    queryset = Views.objects.all()
    Model = Movie
    place = 'ratings'

class MovieStarsView(AbstractItems):
    serializer_class = StarsSerializer
    queryset = Movie.objects
    Model = Movie
    place = 'stars'

class MovieUpdataView(AbstractUpdateView):
    serializer_class = MoviesSerializerUpdate
    queryset = Movie.objects
    Model = Movie

class MovieAddStar(AddRelation):
    serializer_class = MoviesSerializer
    queryset = Movie.objects
    Model = Movie
    object_index='stars'

class MovieAddTag(AddRelation):
    serializer_class = MoviesSerializer
    queryset = Movie.objects
    Model = Movie
    object_index='tags'