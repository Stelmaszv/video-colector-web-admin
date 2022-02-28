from rest_framework import generics
from rest_framework.pagination import PageNumberPagination

from core.webadminapi.core import AbstractUpdateView
from core.webadminapi.serializers import TagsSerializer
from core.wideocollectorseader.models import Tag
from rest_framework.permissions import IsAuthenticated

class TagsAdminPaginator(PageNumberPagination):
    page_size = 50
    page_size_query_param = 'page_size'
    max_page_size = 50


class TagDeteilsView(AbstractUpdateView):
    serializer_class = TagsSerializer
    queryset = Tag.objects
    Model = Tag

class TagView(generics.ListAPIView):
    serializer_class = TagsSerializer
    queryset = Tag.objects.all()

class AdminTagView(TagView):
    permission_classes = [IsAuthenticated]
    pagination_class = TagsAdminPaginator