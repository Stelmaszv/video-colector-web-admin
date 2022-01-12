from core.webadminapi.views import MoviesView, StarView, ProducentsView, SerieView, TagView, MovieUpdataView,\
    MovieDeteilsView,StarDeteilsView,StarUpdateView,SerieUpdataView,SerieDeteilsView,TagDeteilsView,\
    ProducentsDeteilsView,ProducentsUpdataView,MoviesWithStarsView,SerieMoviesView,ProducentsMoviesView,MoviePhotosView,\
    PhotosSeriesView,ProducentsPhotosView
app_name = 'webadminapi'
from django.urls import path
urlpatterns = [
    path('movies',                               MoviesView.as_view(), name='movies'),
    path('stars',                                StarView.as_view(), name='stars'),
    path('producents',                           ProducentsView.as_view(), name='producents'),
    path('tags',                                 TagView.as_view(), name='tas'),
    path('series',                               SerieView.as_view(), name='series'),
    path('movieupdata/<int:pk>/',                MovieUpdataView.as_view(), name='movieupdate'),
    path('movies',                               MoviesView.as_view(), name='movies'),
    path('movie/<int:pk>/',                      MovieDeteilsView.as_view(), name='movie'),
    path('moviephotosview/<int:pk>/',            MoviePhotosView.as_view(), name='moviephotosview'),
    path('movieswithstars/<int:pk>/',            MoviesWithStarsView.as_view(), name='moviessithstars'),
    path('star/<int:pk>/',                       StarDeteilsView.as_view(), name='star'),
    path('starupdate/<int:pk>/',                 StarUpdateView.as_view(), name='starupdate'),
    path('serie/<int:pk>/',                      SerieDeteilsView.as_view(), name='serie'),
    path('serieupdata/<int:pk>/',                SerieUpdataView.as_view(), name='serieupdata'),
    path('serie/<int:pk>/',                      SerieDeteilsView.as_view(), name='serie'),
    path('seriesphotoview/<int:pk>/',           PhotosSeriesView.as_view(), name='seriesphotoview'),
    path('serieupdata/<int:pk>/',                SerieUpdataView.as_view(), name='serieupdata'),
    path('seriemoviesview/<int:pk>/',            SerieMoviesView.as_view(), name='seriemoviesview'),
    path('tag/<int:pk>/',                        TagDeteilsView.as_view(), name='tag'),
    path('producent/<int:pk>/',                  ProducentsDeteilsView.as_view(), name='producent'),
    path('producentupdata/<int:pk>/',            ProducentsUpdataView.as_view(), name='producentupdata'),
    path('producentsmoviesview/<int:pk>/',       ProducentsMoviesView.as_view(), name='producentsmoviesview'),
    path('producentsphotosview/<int:pk>/',       ProducentsPhotosView.as_view(), name='producentsphotosview')
]

