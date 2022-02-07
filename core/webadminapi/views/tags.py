from rest_framework import generics
from rest_framework.pagination import PageNumberPagination

from core.webadminapi.core import AbstractGenericsAPIView, AbstractUpdateView
from core.webadminapi.serializers import TagsSerializer
from core.wideocollectorseader.models import Tag


class TagDeteilsView(AbstractUpdateView):
    serializer_class = TagsSerializer
    queryset = Tag.objects
    Model = Tag

class TagView(generics.ListAPIView):
    serializer_class = TagsSerializer
    queryset = Tag.objects.all()