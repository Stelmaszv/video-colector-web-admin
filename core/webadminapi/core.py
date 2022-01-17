from django.contrib.auth import get_user_model, authenticate
from django.http import Http404
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status, generics
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated

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
        self.query=self.get_queryset()
        serializer = self.serializer_class(self.query)
        return Response(serializer.data)

    def get_queryset(self):
        return self.query

    def delete(self, request, pk, format=None):
        self.query = self.get_object(pk)
        self.query.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

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

class AbstractGenericsAPIView(generics.ListAPIView):

    Model =None

    def get_object(self, pk):
        try:
            return self.Model.objects.get(pk=pk)
        except self.Model.DoesNotExist:
            raise Http404