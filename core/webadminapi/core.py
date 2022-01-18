from django.contrib.auth import get_user_model, authenticate
from django.http import Http404
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status, generics
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated

from core.wideocollectorseader.models import Favourite


class Authentication(BasicAuthentication):

    def authenticate(self, request):
        username = request.data.get('username', None)
        password = request.data.get('password', None)
        credentials = {
            get_user_model().USERNAME_FIELD: username,
            'password': password
        }
        user = authenticate(**credentials)
        return (user, None)

class AbstractDeteilsView(APIView):

    Model=None
    queryset = []
    serializer_class=None

    def get_object(self, pk):
        try:
            return self.Model.objects.get(pk=pk)
        except self.Model.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        self.query = self.get_object(pk)
        self.exc_action_before_query()
        self.query=self.get_queryset()
        self.exc_action_before_serializer()
        serializer = self.serializer_class(self.query,context={'request': request.user})
        return Response(serializer.data)

    def get_queryset(self):
        return self.query

    def add_favorits(self):
        is_favourite = self.is_favourite(self.query)
        if is_favourite is False:
            Fav = Favourite(User=self.request.user)
            Fav.save()
            self.query.favourite.add(Fav)
        else:
            list = self.query.favourite.all()
            for Fav in list:
                if Fav.User == self.request.user:
                    self.query.favourite.remove(Fav)

    def exc_action_before_query(self):
        pass

    def exc_action_before_serializer(self):
        pass

    def is_favourite(self,instance):
        for Fav in self.query.favourite.all():
            if Fav.User == self.request.user:
                return True
        return False

class AbstractUpdateView(AbstractDeteilsView):

    Model=None
    queryset = []
    serializer_class=None

    authentication_classes = (SessionAuthentication, Authentication,)
    permission_classes = [IsAuthenticated]

    def put(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = self.serializer_class(snippet, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        snippet = self.get_object(pk)
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class LargeResultsSetPagination(PageNumberPagination):
    page_size = 5
    page_size_query_param = 'page_size'
    max_page_size = 10

class AbstractGenericsAPIView(generics.ListAPIView):

    Model =None
    pagination_class = LargeResultsSetPagination

    def get_object(self, pk):
        try:
            return self.Model.objects.get(pk=pk)
        except self.Model.DoesNotExist:
            raise Http404

    def list(self, request):
        # Note the use of `get_queryset()` instead of `self.queryset`
        serializer = self.serializer_class(self.get_queryset(), many=True,context={'request': request.user})
        page = self.paginate_queryset(serializer.data)
        return self.get_paginated_response(page)

