import json
from pathlib import Path
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import  APIView
from .models import Producents

class APIPrototype(APIView):

    file_name=''
    Model=None

    def api_get(self, request, *args, **kwargs):
        if Path('./jsondb/'+self.file_name).is_file():
            with open('./jsondb/'+self.file_name) as json_file:
                data = json.load(json_file)
                for item in data:
                    if len(self.Model.objects.filter(name=item['name']))==0:
                        self.Model(
                            name         = item['name'],
                            banner       = item['baner'],
                            show_name    = item['show_name'],
                            avatar       = item['avatar'],
                            dir          = item['dir'],
                            description  = item['description']
                        ).save()
            return Response(data=['New Data added'], status=status.HTTP_200_OK)
        else:
            print('Not found '+self.file_name)
            return Response(data=['Not found '+self.file_name+''], status=status.HTTP_404_NOT_FOUND)

    def get(self, request, *args, **kwargs):
        return self.api_get(request)

class StartSeederView(APIPrototype):
    file_name = 'Producent.json'
    Model=Producents
