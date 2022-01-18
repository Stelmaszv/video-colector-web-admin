from core.webadminapi.views.movies import MoviesView, MovieUpdataView, MovieDeteilsView, MoviePhotosView, \
    MoviesWithStarsView, MovieNextInSeriesView, MovieAddToFavoriteView, MovieAddToRatingView, MovieAddToLikeView, \
    MovieAddToDisLikeView
from core.webadminapi.views.producent import ProducentsView, ProducentsDeteilsView, ProducentsUpdataView, \
    ProducentsMoviesView, ProducentStarsView, ProducentsPhotosView
from core.webadminapi.views.serie import SerieView, SeriesStarsView, SerieDeteilsView, SerieUpdataView, SerieMoviesView, \
    SeriesPhotosView, SeriesRandomMovieView, SeriesBennersView, SerieAddToFavoriteView, SerieAddToRatingView, \
    SerieAddToLikeView, SerieAddToDisLikeView
from core.webadminapi.views.stars import StarView, StarDeteilsView, StarUpdateView, StarAddToFavoriteView, \
    StarAddToRatingView, StarAddToLikeView, StarAddToDisLikeView
from core.webadminapi.views.tags import TagView, TagDeteilsView

app_name = 'webadminapi'
from django.urls import path
urlpatterns = [
    #movies
    path('movies',                               MoviesView.as_view(), name='movies'),
    path('movieupdata/<int:pk>/',                MovieUpdataView.as_view(), name='movieupdate'),
    path('movies',                               MoviesView.as_view(), name='movies'),
    path('movie/<int:pk>/',                      MovieDeteilsView.as_view(), name='movie'),
    path('moviephotosview/<int:pk>/',            MoviePhotosView.as_view(), name='moviephotosview'),
    path('movieswithstars/<int:pk>/',            MoviesWithStarsView.as_view(), name='moviessithstars'),
    path('movienextinseries/<int:pk>/',          MovieNextInSeriesView.as_view(), name='movienextinseries'),
    path('movieaddtofavorite/<int:pk>/',         MovieAddToFavoriteView.as_view(), name='movieaddtofavorite'),
    path('movieaddtorating/<int:pk>',            MovieAddToRatingView.as_view(), name='movieaddtorating'),
    path('movieaddtolike/<int:pk>',              MovieAddToLikeView.as_view(), name='movieaddtolike'),
    path('movieaddtodislike/<int:pk>',           MovieAddToDisLikeView.as_view(), name='movieaddtodislike'),
    #stars
    path('stars',                                StarView.as_view(), name='stars'),
    path('star/<int:pk>/',                       StarDeteilsView.as_view(), name='star'),
    path('starupdate/<int:pk>/',                 StarUpdateView.as_view(), name='starupdate'),
    path('staraddtofavorite/<int:pk>/',          StarAddToFavoriteView.as_view(), name='staraddtofavorite'),
    path('staraddrating/<int:pk>/',              StarAddToRatingView.as_view(), name='staraddrating'),
    path('staraddtolike/<int:pk>/',              StarAddToLikeView.as_view(), name='staraddtolike'),
    path('staraddtodislike/<int:pk>/',           StarAddToDisLikeView.as_view(), name='staraddtodislike'),
    #series
    path('series',                               SerieView.as_view(), name='series'),
    path('seriesstarsview/<int:pk>/',            SeriesStarsView.as_view(), name='seriesstarsview'),
    path('serie/<int:pk>/',                      SerieDeteilsView.as_view(), name='serie'),
    path('serieupdata/<int:pk>/',                SerieUpdataView.as_view(), name='serieupdata'),
    path('serie/<int:pk>/',                      SerieDeteilsView.as_view(), name='serie'),
    path('seriesphotoview/<int:pk>/',            SeriesPhotosView.as_view(), name='seriesphotoview'),
    path('serieupdata/<int:pk>/',                SerieUpdataView.as_view(), name='serieupdata'),
    path('seriemoviesview/<int:pk>/',            SerieMoviesView.as_view(), name='seriemoviesview'),
    path('seriesrandommovie/<int:pk>/',          SeriesRandomMovieView.as_view(), name='seriesrandommovie'),
    path('seriesbenners/<int:pk>/',              SeriesBennersView.as_view(), name='seriesbenners'),
    path('serieaddtofavorite/<int:pk>/',         SerieAddToFavoriteView.as_view(), name='serieaddtofavorite'),
    path('staraddtorating/<int:pk>/',            SerieAddToRatingView.as_view(), name='staraddtorating'),
    path('serieaddtolike/<int:pk>/',             SerieAddToLikeView.as_view(), name='serieaddtolike'),
    path('serieaddtosislike/<int:pk>/',          SerieAddToDisLikeView.as_view(), name='serieaddtosislike'),
    #producent
    path('producents',                           ProducentsView.as_view(), name='producents'),
    path('producent/<int:pk>/',                  ProducentsDeteilsView.as_view(), name='producent'),
    path('producentupdata/<int:pk>/',            ProducentsUpdataView.as_view(), name='producentupdata'),
    path('producentsmoviesview/<int:pk>/',       ProducentsMoviesView.as_view(), name='producentsmoviesview'),
    path('producentsstarsview/<int:pk>/',        ProducentStarsView.as_view(), name='producentsstarsview'),
    path('producentsphotosview/<int:pk>/',       ProducentsPhotosView.as_view(), name='producentsphotosview'),
    path('tags',                                 TagView.as_view(), name='tas'),
    path('tag/<int:pk>/',                        TagDeteilsView.as_view(), name='tag'),
]