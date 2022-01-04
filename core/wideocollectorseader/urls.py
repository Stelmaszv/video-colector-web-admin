from core.wideocollectorseader.views import StartSeederView

app_name = 'wideocollectorseader'
from django.urls import path
urlpatterns = [
    path('start_seeder',                    StartSeederView.as_view(), name='start_seeder'),
]