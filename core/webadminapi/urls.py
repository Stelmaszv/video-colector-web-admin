from core.webadminapi.views import MoviesView, StarView, ProducentsView, SerieView, TagView, MovieUpdataView,\
    MovieDeteilsView,StarDeteilsView,StarUpdateView,SerieUpdataView,SerieDeteilsView,TagDeteilsView,\
    ProducentsDeteilsView,ProducentsUpdataView,MoviesWithStarsView
app_name = 'webadminapi'
from django.urls import path
urlpatterns = [
    path('movies',                          MoviesView.as_view(), name='movies'),
    path('stars',                           StarView.as_view(), name='stars'),
    path('producents',                      ProducentsView.as_view(), name='producents'),
    path('tags',                            TagView.as_view(), name='tas'),
    path('series',                          SerieView.as_view(), name='series'),
    path('movieupdata/<int:pk>/',           MovieUpdataView.as_view(), name='movieupdate'),
    path('movies',                          MoviesView.as_view(), name='movies'),
    path('movie/<int:pk>/',                 MovieDeteilsView.as_view(), name='movie'),
    path('movieswithstars/<int:pk>/',       MoviesWithStarsView.as_view(), name='moviessithstars'),
    path('star/<int:pk>/',                  StarDeteilsView.as_view(), name='star'),
    path('starupdate/<int:pk>/',            StarUpdateView.as_view(), name='starupdate'),
    path('serie/<int:pk>/',                 SerieDeteilsView.as_view(), name='serie'),
    path('serieupdata/<int:pk>/',           SerieUpdataView.as_view(), name='serieupdata'),
    path('serie/<int:pk>/',                 SerieDeteilsView.as_view(), name='serie'),
    path('serieupdata/<int:pk>/',           SerieUpdataView.as_view(), name='serieupdata'),
    path('tag/<int:pk>/',                   TagDeteilsView.as_view(), name='tag'),
    path('producent/<int:pk>/',             ProducentsDeteilsView.as_view(), name='producent'),
    path('producentupdata/<int:pk>/',       ProducentsUpdataView.as_view(), name='producentupdata'),
]

