from core.webadminapi.views import MoviesView,StarView,ProducentsView,SerieView,TagView
app_name = 'webadminapi'
from django.urls import path
urlpatterns = [
    path('movies',                    MoviesView.as_view(), name='movies'),
    path('stars',                     StarView.as_view(), name='stars'),
    path('producents',                ProducentsView.as_view(), name='producents'),
    path('tags',                      TagView.as_view(), name='tas'),
    path('series',                    SerieView.as_view(), name='series')
]