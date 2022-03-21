from core.wideocollectorseader.views import StartSeederView, StartView

app_name = 'wideocollectorseader'
from django.urls import re_path,path

urlpatterns = [
    path('seed',                    StartSeederView.as_view(), name='start_seeder')
]