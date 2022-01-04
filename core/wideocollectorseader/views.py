import json
from abc import abstractmethod, ABC
from pathlib import Path
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import  APIView
from .models import Producents

class APIPrototype(APIView,ABC):

    file_name=''
    Model=None

    @abstractmethod
    def add_model(self,item):
        pass

    def api_get(self, request, *args, **kwargs):
        if Path('./jsondb/'+self.file_name).is_file():
            with open('./jsondb/'+self.file_name) as json_file:
                data = json.load(json_file)
                for item in data:
                    if len(self.Model.objects.filter(name=item['name']))==0:
                        self.add_model(item)
            return Response(data=['New Data added'], status=status.HTTP_200_OK)
        else:
            print('Not found '+self.file_name)
            return Response(data=['Not found '+self.file_name+''], status=status.HTTP_404_NOT_FOUND)

    def get(self, request, *args, **kwargs):
        return self.api_get(request)

class StartSeederView(APIPrototype):
    file_name = 'Producent.json'
    Model=Producents

    def add_model(self,item):
        self.Model(
            name=item['name'],
            banner=item['banner'],
            show_name=item['show_name'],
            avatar=item['avatar'],
            dir=item['dir'],
            country=item['country'],
            description=item['description']
        ).save()
