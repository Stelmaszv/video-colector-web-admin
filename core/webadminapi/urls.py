from core.webadminapi.views import MoviesView,StarView

app_name = 'webadminapi'
from django.urls import path
urlpatterns = [
    path('movies',                    MoviesView.as_view(), name='movies'),
    path('stars',                     StarView.as_view(), name='stars'),
]