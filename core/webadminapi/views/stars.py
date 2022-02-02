from rest_framework import generics
from rest_framework.authentication import SessionAuthentication
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import IsAuthenticated
from core.webadminapi.core import AbstractDeteilsView, AbstractUpdateView, AbstractGenericsAPIView, Authentication
from core.webadminapi.filters import StarFilter
from core.webadminapi.serializers import StarsSerializer, StarsSerializerUpdate,StarSlectSerializer
from core.wideocollectorseader.models import Star
from django_filters import rest_framework as filters

class StarsPaginator(PageNumberPagination):
    page_size = 20
    page_size_query_param = 'page_size'
    max_page_size = 10

class StarDeteilsView(AbstractDeteilsView):
    serializer_class = StarsSerializer
    queryset = Star.objects
    Model = Star

class StarView(AbstractGenericsAPIView):
    serializer_class = StarsSerializer
    queryset = Star.objects.all()
    filter_backends = [filters.DjangoFilterBackend]
    filterset_class  = StarFilter
    order_by ='-added'
    pagination_class = StarsPaginator

class StarUpdateView(AbstractUpdateView):
    serializer_class = StarsSerializerUpdate
    queryset = Star.objects
    Model = Star

class StarSelectOptionView(generics.ListAPIView):
    serializer_class = StarSlectSerializer
    queryset = Star.objects.all()

#actions
class StarAddToFavoriteView(AbstractDeteilsView):
    serializer_class = StarsSerializer
    queryset = Star.objects
    Model = Star
    authentication_classes = (SessionAuthentication, Authentication,)
    permission_classes = [IsAuthenticated]

    def exc_action_before_query(self):
        self.add_favorits()

class StarAddToRatingView(StarAddToFavoriteView):

    def exc_action_before_query(self):
        self.add_raiting()

class StarAddToLikeView(AbstractDeteilsView):

    def exc_action_before_query(self):
        self.add_like()

class StarAddToDisLikeView(AbstractDeteilsView):

    def exc_action_before_query(self):
        self.add_disLikes()