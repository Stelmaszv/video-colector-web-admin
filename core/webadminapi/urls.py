from core.webadminapi.views import MoviesView, StarView, ProducentsView, SerieView, TagView, MovieUpdataView,\
    MovieDeteilsView,StarDeteilsView,StarUpdateView
app_name = 'webadminapi'
from django.urls import path
urlpatterns = [
    path('movies',                          MoviesView.as_view(), name='movies'),
    path('stars',                           StarView.as_view(), name='stars'),
    path('producents',                      ProducentsView.as_view(), name='producents'),
    path('tags',                            TagView.as_view(), name='tas'),
    path('series',                          SerieView.as_view(), name='series'),
    path('movieupdata/<int:pk>/',           MovieUpdataView.as_view(), name='movieupdate'),
    path('movie/<int:pk>/',                 MovieDeteilsView.as_view(), name='movie'),
    path('star/<int:pk>/',                  StarDeteilsView.as_view(), name='star'),
    path('starupdate/<int:pk>/',            StarUpdateView.as_view(), name='starupdate')
]

