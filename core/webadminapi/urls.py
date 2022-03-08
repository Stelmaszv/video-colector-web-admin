
from django.conf import settings
from django.conf.urls.static import static

from core.webadminapi.core import DeleteLikeView, DeleteDisLikessView, DeleteRattingView, DeleteViewsView
from core.webadminapi.views.favorite import FavoritsMovies, FavoritsStars, FavoritsSeries, FavoritsProducents, \
    FavoritsAddMovie, FavoritsAddStar, FavoritsAddSerie, FavoritsAddProducent, FavoritsIsMovies, FavoritsIsStars, \
    FavoritsIsSeries
from core.webadminapi.views.movies import (MovieAddToDisLikeView,
                                           MovieAddToLikeView,
                                           MovieAddToRatingView,
                                           MovieDeteilsView,
                                           MovieNextInSeriesView,
                                           MoviePhotosView, MoviesView,
                                           MoviesWithStarsView,
                                           MovieUpdataView,
                                           MovieUpdateViewsView,
                                           MovieNextWithStarView,
                                           AdminMoviesView,
                                           AdminGaleryDelete,
                                           AdminGaleryGenerateMoviecap,
                                           AdminStatsMovieLiks,
                                           AdminStatsMovieDisLiks,
                                           AdminStatsMovieViews,
                                           AdminStatsMovieRatings,
                                           MovieStarsView)
from core.webadminapi.views.producent import (ProducentAddToDisLikeView,
                                              ProducentAddToFavoriteView,
                                              ProducentAddToLikeView,
                                              ProducentAddToRatingView,
                                              ProducentsDeteilsView,
                                              ProducentsFormView,
                                              ProducentsMoviesView,
                                              ProducentsPhotosView,
                                              ProducentsSeriesView,
                                              ProducentStarsView,
                                              ProducentsUpdataView,
                                              ProducentsView,
                                              ProducentUpdateViewsView,
                                              AdminProducentsView)
from core.webadminapi.views.serie import (SelectOptionView,
                                          SerieAddToDisLikeView,
                                          SerieAddToFavoriteView,
                                          SerieAddToLikeView,
                                          SerieAddToRatingView,
                                          SerieDeteilsView,
                                          SerieMoviesView,
                                          SeriesBennersView,
                                          SeriesPhotosView,
                                          SeriesRandomMovieView,
                                          SeriesStarsView,
                                          SerieUpdataView,
                                          SerieView,
                                          SerieUpdateViewView,
                                          AdminSerieView,
                                          AdminStatsSerieViews,
                                          AdminStatsSerieDisLiks,
                                          AdminStatsSerieLiks,
                                          AdminStatsSerieRatings)
from core.webadminapi.views.stars import (StarAddToDisLikeView,
                                          StarAddToFavoriteView,
                                          StarAddToLikeView,
                                          StarAddToRatingView,
                                          StarDeteilsView,
                                          StarSelectOptionView,
                                          StarsMoviesView,
                                          StarsPhotoView,
                                          StarUpdateView,
                                          StarView,
                                          StarUpdateViewsView,
                                          AdminStarView)
from core.webadminapi.views.tags import TagDeteilsView, TagView, AdminTagView

app_name = 'webadminapi'
from django.urls import path

urlpatterns = [
    #item
    path('movie/stars/<int:pk>/',                 MovieStarsView.as_view(), name='starsitems'),
    # stats Series
    path('admin/stats/serie/views/<int:pk>/', AdminStatsSerieViews.as_view(), name='series_stats_views'),
    path('admin/stats/serie/disliks/<int:pk>/', AdminStatsSerieDisLiks.as_view(), name='series_stats_disliks'),
    path('admin/stats/serie/laiks/<int:pk>/', AdminStatsSerieLiks.as_view(), name='series_stats_laiks'),
    path('admin/stats/serie/ratings/<int:pk>/', AdminStatsSerieRatings.as_view(), name='series_stats_ratings'),
    #stats Movies
    path('admin/stats/movie/views/<int:pk>/',        AdminStatsMovieViews.as_view(), name='deletePhotos'),
    path('admin/stats/movie/disliks/<int:pk>/',      AdminStatsMovieDisLiks.as_view(), name='deletePhotos'),
    path('admin/stats/movie/laiks/<int:pk>/',        AdminStatsMovieLiks.as_view(), name='deletePhotos'),
    path('admin/stats/movie/ratings/<int:pk>/',        AdminStatsMovieRatings.as_view(), name='deletePhotos'),
    #galery
    path('admin/galery/movie/delete/<int:pk>/',        AdminGaleryDelete.as_view(), name='deletePhotos'),
    path('admin/galery/generate/moviecap/<int:pk>/',   AdminGaleryGenerateMoviecap.as_view(), name='deletePhotos'),
    #admin
    path('admin/movies',                         AdminMoviesView.as_view(), name='adminmoviees'),
    path('admin/producent',                      AdminProducentsView.as_view(), name='adminprodicent'),
    path('admin/serie',                          AdminSerieView.as_view(), name='adminseries'),
    path('admin/stars',                          AdminStarView.as_view(), name='adminstars'),
    path('admin/tags',                           AdminTagView.as_view(), name='admintags'),
    #movies
    path('movies',                               MoviesView.as_view(), name='movies'),
    path('movieupdata/<int:pk>/',                MovieUpdataView.as_view(), name='movieupdate'),
    path('movies',                               MoviesView.as_view(), name='movies'),
    path('movie/<int:pk>/',                      MovieDeteilsView.as_view(), name='movie'),
    path('moviephotosview/<int:pk>/',            MoviePhotosView.as_view(), name='moviephotosview'),
    path('movieswithstars/<int:pk>/',            MoviesWithStarsView.as_view(), name='moviessithstars'),
    path('movienextinseries/<int:pk>/',          MovieNextInSeriesView.as_view(), name='movienextinseries'),
    path('moviemextwithstar/<int:pk>/',           MovieNextWithStarView.as_view(), name='moviemextwithstar'),
    #errors
    path('movieaddtorating/<int:pk>/',            MovieAddToRatingView.as_view(), name='movieaddtorating'),
    path('movieaddtolike/<int:pk>/',              MovieAddToLikeView.as_view(), name='movieaddtolike'),
    path('movieaddtodislike/<int:pk>/',           MovieAddToDisLikeView.as_view(), name='movieaddtodislike'),
    path('movieaupdateviews/<int:pk>/',           MovieUpdateViewsView.as_view(), name='movieaddtodislike'),
    #stars
    path('stars',                                StarView.as_view(), name='stars'),
    path('starsmovie/<int:pk>/',                 StarsMoviesView.as_view(), name='Starsmovie'),
    path('star/<int:pk>/',                       StarDeteilsView.as_view(), name='star'),
    path('star/update/<int:pk>/',                StarUpdateView.as_view(), name='starupdate'),
    path('staraddtofavorite/<int:pk>/',          StarAddToFavoriteView.as_view(), name='staraddtofavorite'),
    path('staraddrating/<int:pk>/',              StarAddToRatingView.as_view(), name='staraddrating'),
    path('staraddtolike/<int:pk>/',              StarAddToLikeView.as_view(), name='staraddtolike'),
    path('staraddtodislike/<int:pk>/',           StarAddToDisLikeView.as_view(), name='staraddtodislike'),
    path('starupdateviews/<int:pk>/',            StarUpdateViewsView.as_view(), name='starupdatestar'),
    path('stars_form',                           StarSelectOptionView.as_view(), name='series_select'),
    path('stars/photo/<int:pk>/',                 StarsPhotoView.as_view(), name='starsphoto'),
    #series
    path('series',                               SerieView.as_view(), name='series'),
    path('seriesstarsview/<int:pk>/',            SeriesStarsView.as_view(), name='seriesstarsview'),
    path('serie/<int:pk>/',                      SerieDeteilsView.as_view(), name='serie'),
    path('serie/updata/<int:pk>/',                SerieUpdataView.as_view(), name='serieupdata'),
    path('serie/<int:pk>/',                      SerieDeteilsView.as_view(), name='serie'),
    path('series/photo/<int:pk>/',            SeriesPhotosView.as_view(), name='seriesphotoview'),
    path('serieupdata/<int:pk>/',                SerieUpdataView.as_view(), name='serieupdata'),
    path('seriemoviesview/<int:pk>/',            SerieMoviesView.as_view(), name='seriemoviesview'),
    path('seriesrandommovie/<int:pk>/',          SeriesRandomMovieView.as_view(), name='seriesrandommovie'),
    path('seriesbenners/<int:pk>/',              SeriesBennersView.as_view(), name='seriesbenners'),
    path('serieaddtofavorite/<int:pk>/',         SerieAddToFavoriteView.as_view(), name='serieaddtofavorite'),
    path('staraddtorating/<int:pk>/',            SerieAddToRatingView.as_view(), name='staraddtorating'),
    path('serieaddtolike/<int:pk>/',             SerieAddToLikeView.as_view(), name='serieaddtolike'),
    path('serieaddtosislike/<int:pk>/',          SerieAddToDisLikeView.as_view(), name='serieaddtosislike'),
    path('serieupdateview/<int:pk>/',            SerieUpdateViewView.as_view(), name='serieupdateview'),
    path('series_select',                        SelectOptionView.as_view(), name='series_select'),
    #producent
    path('producents',                           ProducentsView.as_view(), name='producents'),
    path('producent/<int:pk>/',                  ProducentsDeteilsView.as_view(), name='producent'),
    path('producent/updata/<int:pk>/',            ProducentsUpdataView.as_view(), name='producentupdata'),
    path('producentsmovies/<int:pk>/',           ProducentsMoviesView.as_view(), name='producentsmoviesview'),
    path('producentsstar/<int:pk>/',             ProducentStarsView.as_view(), name='producentsstarsview'),
    path('producent/photos/<int:pk>/',           ProducentsPhotosView.as_view(), name='producentsphotosview'),
    path('producentaddtofavorite/<int:pk>/',     ProducentAddToFavoriteView.as_view(), name='producentaddtofavorite'),
    path('producentaddtorating/<int:pk>/',       ProducentAddToRatingView.as_view(), name='producentaddtorating'),
    path('producentaddtolike/<int:pk>/',         ProducentAddToLikeView.as_view(), name='producentaddtolike'),
    path('producentaddtodislike/<int:pk>/',      ProducentAddToDisLikeView.as_view(), name='producentaddtodislike'),
    path('producentupdateviews/<int:pk>/',       ProducentUpdateViewsView.as_view(), name='producentupdateviews'),
    path('producentsformview',                   ProducentsFormView.as_view(), name='producentsformview'),
    path('producentsseries/<int:pk>/',           ProducentsSeriesView.as_view(), name='producentsseries'),
    #tags
    path('tags',                                 TagView.as_view(), name='tas'),
    path('tag/<int:pk>/',                        TagDeteilsView.as_view(), name='tag'),
    path('tag_form',                             SelectOptionView.as_view(), name='series_select'),
    #favorits
    path('favorite/movies',                      FavoritsMovies.as_view(),  name='favorits_list'),
    path('favorite/stars',                       FavoritsStars.as_view(),   name='favorits_stars'),
    path('favorite/producents',                  FavoritsProducents.as_view(),  name='favorits_producents'),
    path('favorite/series',                       FavoritsSeries.as_view(),  name='favorits_series'),
    path('favorite/movie/<int:pk>/',             FavoritsAddMovie.as_view(),  name='favorits_producents'),
    path('favorite/star/<int:pk>/',              FavoritsAddStar.as_view(),  name='favorits_stars'),
    path('favorite/serie/<int:pk>/',             FavoritsAddSerie.as_view(),  name='favorits_stars'),
    path('favorite/producent/<int:pk>/',         FavoritsAddProducent.as_view(),  name='favorits_stars'),
    path('favoriteis/movies/<int:pk>/',          FavoritsIsMovies.as_view(),  name='favorits_movie'),
    path('favoriteis/stars/<int:pk>/',           FavoritsIsStars.as_view(),  name='favoritsis_stars'),
    path('favoriteis/series/<int:pk>/',          FavoritsIsSeries.as_view(),  name='favoritsis_series'),
    #delete
    path('delete/like/<int:pk>/',               DeleteLikeView.as_view(),       name='delete_like'),
    path('delete/dislike/<int:pk>/',            DeleteDisLikessView.as_view(),  name='delete_dislike'),
    path('delete/rating/<int:pk>/',             DeleteRattingView.as_view(),  name='delete_rating'),
    path('delete/views/<int:pk>/',              DeleteViewsView.as_view(),   name='delete_views'),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


