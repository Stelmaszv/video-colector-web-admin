import json
from pathlib import Path
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import  APIView

class APIPrototype(APIView):

    file_name=''

    def api_get(self, request, *args, **kwargs):
        if Path('./jsondb/'+self.file_name).is_file():
            with open('./jsondb/'+self.file_name) as json_file:
                data = json.load(json_file)
                print(data)
        else:
            print('Not found '+self.file_name)
        return Response(data=['Not found '+self.file_name+''], status=status.HTTP_200_OK)

    def get(self, request, *args, **kwargs):
        return self.api_get(request)

class StartSeederView(APIPrototype):
    file_name = 'Producent.json'