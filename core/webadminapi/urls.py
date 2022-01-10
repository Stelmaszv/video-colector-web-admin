from core.webadminapi.views import MoviesView

app_name = 'webadminapi'
from django.urls import path
urlpatterns = [
    path('movies',                    MoviesView.as_view(), name='movies'),
]