from core.wideocollectorseader.views import StartSeederView

app_name = 'wideocollectorseader'
from django.urls import path

urlpatterns = [
    path('',                    StartSeederView.as_view(), name='start_seeder')
]