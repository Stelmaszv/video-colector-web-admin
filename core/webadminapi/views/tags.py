from rest_framework.pagination import PageNumberPagination
from core.webadminapi.core import AbstractUpdateView, AbstractGenericsAPIView
from core.webadminapi.serializers import TagsSerializer
from core.wideocollectorseader.models import Tag

class TagDeteilsView(AbstractUpdateView):
    serializer_class = TagsSerializer
    queryset = Tag.objects
    Model = Tag

class TagView(AbstractGenericsAPIView):
    serializer_class = TagsSerializer
    queryset = Tag.objects.all()