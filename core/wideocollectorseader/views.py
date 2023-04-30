import json

from django.http import HttpResponseRedirect
from django.views.generic.base import TemplateView
from django.urls import reverse
from abc import ABC, abstractmethod
from pathlib import Path
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from core.setings import save_mode_defult, setings_set_defult, update_setings
from .models import Movie, Producents, Serie, Star, Tag

class StartSeederView(APIView):

    def opserver(self,opservers):
        for opserver in opservers:
            opserver.Seed()

    def api_get(self, request, *args, **kwargs):
        save_mode_defult['save_mode']=True
        save_mode_defult['udpdate_relation'] = False
        update_setings(save_mode_defult)
        opservers=[
            #TagSeader(),
            ProducentSeader(),
            SeriesSeader(),
            StarSeader(),
            MoviesSeader()
        ]
        self.opserver(opservers)
        save_mode_defult['udpdate_relation'] = True
        setings_set_defult()
        self.update_items()
        
        return HttpResponseRedirect(reverse('webapp:index'))

    def update_items(self):
        producents_all=Producents.objects.all()
        for producent in producents_all:
            producent.save()
            
        producents_all=Serie.objects.all()
        for serie in producents_all:
            serie.save()

    def get(self, request, *args, **kwargs):
        return self.api_get(request)

class ApstractSeader(ABC):

    index = ''
    Model = None

    def Seed(self):
        if Path('web/dist.json').is_file():
            with open('web/dist.json') as json_file:
                data = json.load(json_file)
                for item in data[self.index]:
                    if len(self.Model.objects.filter(name=item)) == 0:
                        self.add_model(item,data)
        else:
            print('Not found dist.json')

    @abstractmethod
    def add_model(self,item,data):
        pass

    def add_one_many(self,name,Model):
        return Model.objects.get(name=name)

    def add_one_many_conection(self,name,obj_name,atribute_name):
        getattr(obj_name,atribute_name).add(name)

    def add_one_many_loop(self,item,Model,atribute_name,AddModel):
        for tag in item:
            if len(AddModel.objects.filter(name=tag)) == 0:
                AddModel(name=tag).save()

    def add_data(self,Data):
        if Data and Data != 'YEAR-MOUNT-DAY':
            return Data
        return None
    
    def add_tags(self, tags, Model):
        for tag in tags:
            StarObj=Tag.objects.get(name=tag)
            Model.tags.add(StarObj)

class ProducentSeader(ApstractSeader):

    Model = Producents
    index = 'producents'

    def add_model(self,item,data):
        item = data[self.index][item]
        print('Add Producent '+item['name'])
        self.Model(
            name=item['name'],
            banner=item['banner'],
            show_name=item['show_name'],
            avatar=item['avatar'],
            dir=item['dir'],
            web_dir=item['web_dir'],
            country=item['country'],
            description=item['description']
        ).save()

class SeriesSeader(ApstractSeader):

    Model = Serie
    index = 'series'

    def add_model(self,item,data):
        item = data[self.index][item]
        Producent =None
        SerieItem = None

        if 'producent' in item:
           Producent = self.add_one_many(item['producent'], Producents)

        print('Add Serie ' + item['name'])

        self.Model(
            name=item['name'],
            banner=item['banner'],
            show_name=item['show_name'],
            avatar=item['avatar'],
            dir=item['dir'],
            web_dir=item['web_dir'],
            country=item['country'],
            description=item['description'],
            years = '',
            Producent=Producent,
            number_of_sezons = 0
        ).save()

        SerieItem = Serie.objects.filter(name=item['name'])[0]

        if Producent is not None:
            self.add_one_many_conection(SerieItem,Producent,'series')

        if 'tags' in item:
            self.add_one_many_loop(item['tags'], SerieItem, 'tags', Tag)
            self.add_tags(item['tags'], SerieItem)

class TagSeader(ApstractSeader):

    index = 'tags'
    Model = Tag

    def add_model(self,item,data):
        print('Add Tag ' + item['name'])
        self.Model(
            name=item
        ).save()

class StarSeader(ApstractSeader):

    index = 'stars'
    Model = Star

    def add_model(self,item,data):
        item = data[self.index][item]

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
            web_dir=item['web_dir'],
            date_of_birth = self.add_data(item['date_of_birth'])
        ).save()
        StarItem = Star.objects.latest('id')
        if 'tags' in item:
            self.add_one_many_loop(item['tags'], StarItem, 'tags', Tag)
            self.add_tags(item['tags'], StarItem)

class MoviesSeader(ApstractSeader):

    Model = Movie
    index = 'movies'

    def add_model(self,item,data):
        item = data['movies'][item]

        Producent=None
        serieel=None
        source = ''

        if 'producent' in item:
           Producent = self.add_one_many(item['producent'], Producents)

        if 'series' in item:
           serieel = self.add_one_many(item['series'], Serie)

        print('Add Movie ' + item['name'])

        if 'source' in item:
            source = item['source']

        self.Model(
            name=item['name'],
            show_name=item['show_name'],
            avatar = item['front_cover'],
            poster = item['poster'],
            description=item['description'],
            country=item['country'],
            dir=item['dir'],
            web_dir=item['web_dir'],
            src=item['src'],
            web_src=item['web_src'],
            date_relesed= self.add_data(item['date_relesed']),
            serie=serieel,
            producent = Producent,
            back_cover = item['back_cover'],
            front_cover= item['front_cover'],
            source = source,
        ).save()
        MovieItem = Movie.objects.latest('id')

        if 'tags' in item:
            self.add_one_many_loop(item['tags'], MovieItem, 'tags', Tag)
            self.add_tags(item['tags'],MovieItem)

        if serieel is not None:
            self.add_one_many_conection(MovieItem, serieel, 'movies')
        if Producent is not None:
            self.add_one_many_conection(MovieItem, Producent, 'movies')

        self.add_stars(item['stars'],MovieItem)

    def add_stars(self,stars,Model):
        for star in stars:
            StarObj=Star.objects.get(name=star)
            Model.stars.add(StarObj)
            StarObj.movies.add(Model)
                
class StartView(TemplateView):
    template_name = 'start_view.html'



