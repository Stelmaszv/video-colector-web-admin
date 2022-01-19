from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated
from core.webadminapi.core import AbstractDeteilsView, AbstractUpdateView, AbstractGenericsAPIView, Authentication
from core.webadminapi.filters import StarFilter
from core.webadminapi.serializers import StarsSerializer, StarsSerializerUpdate
from core.wideocollectorseader.models import Star
from django_filters import rest_framework as filters

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

class StarUpdateView(AbstractUpdateView):
    serializer_class = StarsSerializerUpdate
    queryset = Star.objects
    Model = Star

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