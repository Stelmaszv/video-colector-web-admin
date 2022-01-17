from rest_framework import generics
from rest_framework.pagination import PageNumberPagination
from core.webadminapi.core import AbstractDeteilsView, AbstractUpdateView
from core.webadminapi.serializers import StarsSerializer, StarsSerializerUpdate
from core.wideocollectorseader.models import Star

class StarDeteilsView(AbstractDeteilsView):
    serializer_class = StarsSerializer
    queryset = Star.objects
    Model = Star

class StarView(generics.ListAPIView):
    serializer_class = StarsSerializer
    queryset = Star.objects.all()
    pagination_class = PageNumberPagination

class StarUpdateView(AbstractUpdateView):
    serializer_class = StarsSerializerUpdate
    queryset = Star.objects
    Model = Star