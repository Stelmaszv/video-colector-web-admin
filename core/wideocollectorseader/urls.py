from core.wideocollectorseader.views import SeadStartView

app_name = 'wideocollectorseader'
from django.urls import path
urlpatterns = [
    path('carts',                    SeadStartView.as_view(), name='sead_start'),
]