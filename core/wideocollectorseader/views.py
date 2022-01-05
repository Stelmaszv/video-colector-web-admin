import json
from abc import abstractmethod, ABC
from pathlib import Path
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import  APIView
from .models import Producents,Serie

class StartSeederView(APIView):

    def opserver(self,opservers):
        for opserver in opservers:
            opserver.Seed()

    def api_get(self, request, *args, **kwargs):
        opservers=[
            ProducentSeader(),
            SeriesSeader()
        ]
        self.opserver(opservers)
        return Response(data=[], status=status.HTTP_200_OK)
    def get(self, request, *args, **kwargs):
        return self.api_get(request)

class ApstractSeader(ABC):

    file_name = ''
    Model = None

    def Seed(self):
        if Path('./jsondb/' + self.file_name).is_file():
            with open('./jsondb/' + self.file_name) as json_file:
                data = json.load(json_file)
                for item in data:
                    if len(self.Model.objects.filter(name=item['name'])) == 0:
                        self.add_model(item)
        else:
            print('Not found ' + self.file_name)

    @abstractmethod
    def add_model(self,item):
        pass

    def add_one_many(self,name,Model):
        return Model.objects.filter(name=name)[0]

class ProducentSeader(ApstractSeader):

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

class SeriesSeader(ApstractSeader):

    file_name = 'Series.json'
    Model=Serie

    def add_model(self,item):
        self.Model(
            name=item['name'],
            banner=item['banner'],
            show_name=item['show_name'],
            avatar=item['avatar'],
            dir=item['dir'],
            country=item['country'],
            description=item['description'],
            years = item['years'],
            number_of_sezons = item['number_of_sezons'],
            Producent        = self.add_one_many(item['producent'],Producents),
        ).save()

