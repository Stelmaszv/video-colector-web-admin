from django.urls import path
from . import views

app_name = 'api'

urlpatterns = [
    path('start', views.StartView.as_view(), name="start"),
    path('login', views.StartView.as_view(), name="start"),
    path('movies', views.StartView.as_view(), name="start"),
    path('movie/<int:pk>/', views.StartView.as_view(), name="start"),
    path('series', views.StartView.as_view(), name="start"),
    path('serie/<int:pk>/', views.StartView.as_view(), name="start"),
    path('stars', views.StartView.as_view(), name="start"),
    path('star/<int:pk>/', views.StartView.as_view(), name="start"),
    path('producents', views.StartView.as_view(), name="start"),
    path('producent/<int:pk>/', views.StartView.as_view(), name="start"),
]