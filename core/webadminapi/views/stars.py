from rest_framework.pagination import PageNumberPagination
from core.webadminapi.core import AbstractDeteilsView, AbstractUpdateView, AbstractGenericsAPIView
from core.webadminapi.serializers import StarsSerializer, StarsSerializerUpdate
from core.wideocollectorseader.models import Star

class StarDeteilsView(AbstractDeteilsView):
    serializer_class = StarsSerializer
    queryset = Star.objects
    Model = Star

class StarView(AbstractGenericsAPIView):
    serializer_class = StarsSerializer
    queryset = Star.objects.all()

class StarUpdateView(AbstractUpdateView):
    serializer_class = StarsSerializerUpdate
    queryset = Star.objects
    Model = Star