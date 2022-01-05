import json
from abc import abstractmethod, ABC
from pathlib import Path
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import  APIView
from .models import Producents,Serie,Tag

class StartSeederView(APIView):

    def opserver(self,opservers):
        for opserver in opservers:
            opserver.Seed()

    def api_get(self, request, *args, **kwargs):
        opservers=[
            TagSeader(),
            ProducentSeader(),
            SeriesSeader(),
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
        return Model.objects.get(name=name)

    def add_one_many_conection(self,name,obj_name,atribute_name):
        getattr(obj_name,atribute_name).add(name)

    def add_one_many_loop(self,item,Model,atribute_name,AddModel):
        for tag in item:
            Tag=AddModel.objects.get(name=tag)
            getattr(Model, atribute_name).add(Tag)

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
        Producent=self.add_one_many(item['producent'], Producents)
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
            Producent        = Producent,
        ).save()
        SerieItem=Serie.objects.filter(name=item['name'])[0]
        self.add_one_many_conection(SerieItem,Producent,'series')
        self.add_one_many_loop(item['tags'],SerieItem,'tags',Tag)

class TagSeader(ApstractSeader):

    file_name = 'Tags.json'
    Model=Tag

    def add_model(self,item):
        self.Model(
            name=item['name']
        ).save()

