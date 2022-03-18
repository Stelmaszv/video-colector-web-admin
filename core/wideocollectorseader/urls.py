from core.wideocollectorseader.views import StartSeederView, StartView

app_name = 'wideocollectorseader'
from django.urls import path

urlpatterns = [
    path('seed',                    StartSeederView.as_view(), name='start_seeder'),
    path('',                        StartView.as_view(),name="start")
]