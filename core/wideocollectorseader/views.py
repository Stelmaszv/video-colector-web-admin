import json
from abc import abstractmethod, ABC
from pathlib import Path
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import  APIView
from django.views.generic.base import TemplateView

from core.setings import update_setings, setings_set_defult, save_mode_defult
from .models import Producents,Serie,Tag,Star,Movie
from django.shortcuts import render,get_object_or_404,redirect



class StartSeederView(APIView):

    def opserver(self,opservers):
        for opserver in opservers:
            opserver.Seed()

    def api_get(self, request, *args, **kwargs):
        save_mode_defult['save_mode']=False
        update_setings(save_mode_defult)
        opservers=[
            TagSeader(),
            ProducentSeader(),
            SeriesSeader(),
            StarSeader(),
            MoviesSeader()
        ]
        self.opserver(opservers)
        setings_set_defult()
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

    def add_data(self,Data):
        if Data:
            return Data
        return None

class ProducentSeader(ApstractSeader):

    file_name = 'Producent.json'
    Model=Producents

    def add_model(self,item):
        print('Add Producent '+item['name'])
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
        Producent=None
        if len(item['producent']):
            Producent=self.add_one_many(item['producent'], Producents)
        print('Add Serie ' + item['name'])

        self.Model(
            name=item['name'],
            banner=item['banner'],
            show_name=item['show_name'],
            avatar=item['avatar'],
            dir=item['dir'],
            country=item['country'],
            description=item['description'],
            years = item['years'],
            number_of_sezons = item['number_of_sezons']
        ).save()

        SerieItem=Serie.objects.filter(name=item['name'])[0]

        if Producent is not None:
            self.add_one_many_conection(SerieItem,Producent,'series')
        self.add_one_many_loop(item['tags'],SerieItem,'tags',Tag)


class TagSeader(ApstractSeader):

    file_name = 'Tags.json'
    Model=Tag

    def add_model(self,item):
        print('Add Tag ' + item['name'])
        self.Model(
            name=item['name']
        ).save()

class StarSeader(ApstractSeader):

    file_name = 'Stars.json'
    Model=Star

    def add_model(self,item):
        print('Add Star ' + item['name'])
        self.Model(
            name=item['name'],
            avatar = item['avatar'],
            description = item['description'],
            show_name=item['show_name'],
            weight=item['weight'],
            height=item['height'],
            ethnicity=item['ethnicity'],
            hair_color=item['hair_color'],
            birth_place=item['birth_place'],
            nationality=item['nationality'],
            dir=item['dir'],
            date_of_birth = self.add_data(item['date_of_birth'])
        ).save()
        StarItem = Star.objects.latest('id')
        self.add_one_many_loop(item['tags'], StarItem, 'tags', Tag)
        self.add_one_many_loop(item['series'], StarItem, 'series', Serie)

class MoviesSeader(ApstractSeader):

    file_name = 'Movies.json'
    Model=Movie

    def add_model(self,item):
        serieel = self.add_one_many(item['series'][0], Serie)
        print('Add Movie ' + item['name'])
        self.Model(
            name=item['name'],
            show_name=item['show_name'],
            avatar = item['avatar'],
            poster = item['poster'],
            description=item['description'],
            country=item['country'],
            dir=item['dir'],
            src=item['src'],
            web_src=item['web_src'],
            date_relesed= self.add_data(item['date_relesed']),
            serie=serieel
        ).save()
        MovieItem = Movie.objects.latest('id')
        self.add_one_many_loop(item['tags'], MovieItem, 'tags', Tag)
        self.add_one_many_conection(MovieItem, serieel, 'movies')
        self.add_stars(item['stars'],MovieItem)

    def add_stars(self,stars,Model):
        for star in stars:
            StarObj=Star.objects.get(name=star)
            Model.stars.add(StarObj)
            StarObj.movies.add(Model)


class BaseListView(TemplateView):
    redirect=False
    def addGet(self,request,*args,**kwargs):
        self.setContext(request)
        if self.redirect:
            return redirect(self.success_url)
        return render(request, self.template_name, self.context)
    def get(self,request,*args,**kwargs):
        return self.addGet(request)
    def setContext(self,request):
        pass



