from rest_framework.views import  APIView
from rest_framework import status
from rest_framework.response import Response

from core.webadminapi.serializers import MoviesSerializer
from core.wideocollectorseader.models import Movie

class APIPrototype(APIView):
    reverse         = True
    SerializerClass = None
    many     = True
    queryset = ''
    order_by = ''

    def on_query_set(self):
        pass

    def list(self):
        self.on_query_set()
        serializer = self.SerializerClass(self.queryset, many=self.many)
        if len(self.order_by):
            list = sorted(
                serializer.data,
                key=lambda tup: tup[self.order_by],
                reverse=self.reverse)
        else:
            list= serializer.data
        return list

    def post(self, request, *args, **kwargs):
        serializer = self.SerializerClass(data=request.data, many=False)
        if serializer.is_valid():
            serializer.save()
            return Response(data=self.list(), status=status.HTTP_201_CREATED)
        return self.api_get(request)

    def api_get(self, request, *args, **kwargs):
        return Response(data=self.list(), status=status.HTTP_200_OK)

    def get(self, request, *args, **kwargs):
        return self.api_get(request)

class MoviesView(APIPrototype):
    SerializerClass = MoviesSerializer
    queryset = Movie.objects