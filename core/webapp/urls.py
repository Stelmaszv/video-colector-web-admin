from django.urls import path
from . import views

app_name = 'webapp'

urlpatterns = [
    path('movies',views.Movies.as_view(),name="movies"),
    path('series',views.Series.as_view(),name="series"),
    path('stars', views.Stars.as_view(), name="stars"),
    path('producents', views.Producents.as_view(), name="producents"),
    path('producent/star/<int:pk>/', views.ProducentStar.as_view(), name="producentsstar"),
    path('movie/<int:pk>/', views.Movie.as_view(), name="movie"),
    path('movies/with/stars/<int:pk>/', views.MoviesWithStars.as_view(), name="moviessithstars"),
    path('star/<int:pk>/', views.Star.as_view(), name="star"),
    path('serie/<int:pk>/', views.Serie.as_view(), name="serie"),
    path('producent/<int:pk>/', views.Producent.as_view(), name="producet"),
    path('series/in/producent/<int:pk>/', views.SeriesInProducent.as_view(), name="seriesinproducent"),
    path('movies/in/serie/<int:pk>/', views.MoviesInSerie.as_view(), name="moviesinserie"),
    path('movies/with/stars/<int:pk>/', views.StarsMovie.as_view(), name="movieswithstars"),
    path('movies/in/producent/<int:pk>/', views.MoviesInProducent.as_view(), name="moviesinproducent"),
    path('serie/photo/<int:pk>/', views.SerieGalery.as_view(), name="seriephoto"),
    path('series/star/<int:pk>/', views.SeriesStar.as_view(), name="seriesstar"),
    path('producent/photo/<int:pk>/', views.ProducentGalery.as_view(), name="producentphoto"),
    path('stars/photo/<int:pk>/', views.StarsGalery.as_view(), name="starsphoto"),
    path('movie/photo/<int:pk>/', views.MovieGalery.as_view(), name="moviephoto"),
]