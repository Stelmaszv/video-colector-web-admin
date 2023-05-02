from django.urls import include, path
from core.wideocollectorseader.views import StartView, StartSeederView
urlpatterns = [
    path('start', StartView.as_view(), name="start"),
    path('movie/<int:pk>/', StartView.as_view(), name="start"),
]