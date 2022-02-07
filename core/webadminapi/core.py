
import os

from django.contrib.auth import authenticate, get_user_model
from django.http import Http404
from django.utils.deprecation import MiddlewareMixin
from rest_framework import generics, status
from rest_framework.authentication import (BasicAuthentication,
                                           SessionAuthentication)
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from core.wideocollectorseader.models import (DisLikess, Favourite, Likes,
                                              Rating)


class RangesMiddleware(MiddlewareMixin):

    def process_response(self, request, response):
        if response.status_code != 200 or not hasattr(response, 'file_to_stream'):
            return response
        http_range = request.META.get('HTTP_RANGE')
        if not (http_range and http_range.startswith('bytes=') and http_range.count('-') == 1):
            return response
        if_range = request.META.get('HTTP_IF_RANGE')
        if if_range and if_range != response.get('Last-Modified') and if_range != response.get('ETag'):
            return response
        f = response.file_to_stream
        statobj = os.fstat(f.fileno())
        start, end = http_range.split('=')[1].split('-')
        if not start:  # requesting the last N bytes
            start = max(0, statobj.st_size - int(end))
            end = ''
        start, end = int(start or 0), int(end or statobj.st_size - 1)
        assert 0 <= start < statobj.st_size, (start, statobj.st_size)
        end = min(end, statobj.st_size - 1)
        f.seek(start)
        old_read = f.read
        f.read = lambda n: old_read(min(n, end + 1 - f.tell()))
        response.status_code = 206
        response['Content-Length'] = end + 1 - start
        response['Content-Range'] = 'bytes %d-%d/%d' % (start, end, statobj.st_size)
        return response

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

    def add_raiting(self):
        if self.request.GET.get('rate'):
            Rat = Rating(User=self.request.user,rate=self.request.GET.get('rate'))
            Rat.save()
            self.query.ratings.add(Rat)

    def add_like(self):
        Lik = Likes(User=self.request.user)
        Lik.save()
        self.query.likes.add(Lik)

    def add_disLikes(self):
        DisLik =DisLikess(User=self.request.user)
        DisLik.save()
        self.query.disLikes.add(DisLik)

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
    page_size = 8
    page_size_query_param = 'page_size'
    max_page_size = 10

class AbstractGenericsAPIView(generics.ListAPIView):

    Model =None
    pagination_class = LargeResultsSetPagination

class AbstractGenericsAPIViewExtended(AbstractGenericsAPIView):

    Model=None

    def list(self, request, pk):

        queryset = self.filter_queryset()
        serializer = self.serializer_class(queryset, many=True, context={'request': request.user})
        page = self.paginate_queryset(serializer.data)
        return self.get_paginated_response(page)

    def get_object(self, pk):
        try:
            return self.Model.objects.get(pk=pk)
        except self.Model.DoesNotExist:
            raise Http404
