import json
import os
from pathlib import Path

from django.db import models

class AfterSave:
    def __init__(self,Model,init_array):
        self.Model=Model
        for item in init_array:
            getattr(self,item)()

    def UpdateJSON(self):

        def return_stars(Model):
            tags=[]
            for star in Model.stars.all():
                tags.append(star.name)
            return tags

        def return_tags(Model):
            tags=[]
            for tag in Model.tags.all():
                tags.append(tag.name)
            return tags

        def add_data_to_JSON(data):
            data_str=[]
            if hasattr(data,'year'):
                data_str.append(data.year)
            if hasattr(data, 'month'):
                data_str.append(data.month)
            if hasattr(data, 'day'):
                data_str.append(data.day)
            return data_str

        def return_fields(Model):
            fields=[]
            fields.append({"db": "show_name", "value" : Model.show_name})
            fields.append({"db": "description", "value": Model.description})
            fields.append({"db": "date_relesed", "value": add_data_to_JSON(Model.date_relesed), "data" : "True"})
            fields.append({"db": "country", "value": Model.country})
            fields.append({"db": "likes", "value": Model.likes})
            fields.append({"db": "views", "value": Model.view})
            fields.append({"db": "rating", "value": Model.rating})
            return fields

        def retrun_config_json(Model):
            data={}
            data['fields']=  return_fields(Model)
            data['tags']  =  return_tags(Model)
            data['stars'] =  return_stars(Model)
            return json.dumps(data)
        config=self.Model.dir + '/config.JSON'

        if os.path.exists(config):
            os.remove(config)
        f = open(config, "x")
        f.write(retrun_config_json(self.Model))
        f.close()

class Producents(models.Model):
    name      = models.CharField(max_length=200)
    view      = models.IntegerField(default=0)
    likes     = models.IntegerField(default=0)
    favourite = models.BooleanField(default=False)
    banner    = models.CharField(max_length=200, default='',null=True,blank=True)
    show_name = models.CharField(max_length=200,default='',null=True)
    avatar = models.CharField(max_length=200, default='',null=True)
    dir = models.CharField(max_length=200, default='',null=True)
    country = models.CharField(max_length=200, default='',null=True)
    description = models.TextField(default='',null=True)
    year        = models.DateField(null=True,blank=True)
    added       = models.DateTimeField(auto_now=True)
    rating      = models.IntegerField(default=0)
    series = models.ManyToManyField(to='wideocollectorseader.Serie', related_name='ProducentsSerie', blank=True)
    tags = models.ManyToManyField(to='wideocollectorseader.Tag', related_name='producentstags', blank=True)
    def __str__(self):
        return self.name

class Serie(models.Model):
    name                = models.CharField(max_length=200)
    view                = models.IntegerField(default=0)
    likes               = models.IntegerField(default=0)
    favourite           = models.BooleanField(default=False)
    banner              = models.CharField(max_length=200, default='',null=True)
    show_name           = models.CharField(max_length=200,default='',null=True)
    avatar              = models.CharField(max_length=200, default='',null=True)
    dir                 = models.CharField(max_length=200, default='',null=True)
    country             = models.CharField(max_length=200, default='',null=True)
    description         = models.TextField(default='',null=True)
    added               = models.DateTimeField(auto_now=True)
    rating              = models.IntegerField(default=0)
    years               = models.CharField(max_length=200, default='', null=True)
    number_of_sezons    = models.IntegerField(default=0)
    Producent = models.ForeignKey(Producents, on_delete=models.CASCADE,blank=True,null=True)
    tags = models.ManyToManyField(to='wideocollectorseader.Tag', related_name='serietags', blank=True)
    movies = models.ManyToManyField(to='wideocollectorseader.Movie', related_name='SerieMovie', blank=True)
    def __str__(self):
        return self.name

class Tag(models.Model):
    name = models.CharField(max_length=200)
    def __str__(self):
        return self.name

class Star(models.Model):
    name = models.CharField(max_length=200)
    view = models.IntegerField(default=0)
    likes = models.IntegerField(default=0)
    avatar = models.CharField(max_length=200, default='', null=True)
    favourite = models.BooleanField(default=False)
    show_name = models.CharField(max_length=200, default='', null=True)
    description = models.TextField(default='', null=True,blank=True)
    weight      = models.IntegerField(default=0)
    height     = models.IntegerField(default=0)
    ethnicity = models.CharField(max_length=200, default='', null=True)
    hair_color = models.CharField(max_length=200, default='', null=True)
    birth_place = models.CharField(max_length=200, default='', null=True)
    nationality = models.CharField(max_length=200, default='', null=True,blank=True)
    dir = models.CharField(max_length=200, default='', null=True)
    series = models.ManyToManyField(to='wideocollectorseader.Serie', related_name='StarSerie', blank=True)
    tags = models.ManyToManyField(to='wideocollectorseader.Tag', related_name='Starstags', blank=True)
    date_of_birth = models.DateField(null=True,blank=True)
    added               = models.DateTimeField(auto_now=True)
    rating              = models.IntegerField(default=0)
    movies = models.ManyToManyField(to='wideocollectorseader.Movie', related_name='StarsMovies', blank=True)
    def __str__(self):
        return self.name

class Movie(models.Model):
    name = models.CharField(max_length=200,null=True)
    show_name = models.CharField(max_length=200, default='', null=True)
    view = models.IntegerField(default=0)
    likes = models.IntegerField(default=0)
    avatar = models.CharField(max_length=200, default='', null=True)
    src = models.CharField(max_length=200, default='', null=True)
    favourite = models.BooleanField(default=False)
    poster = models.CharField(max_length=200, default='', null=True)
    description = models.TextField(default='', null=True,blank=True)
    country = models.CharField(max_length=200, default='', null=True,blank=True)
    date_relesed = models.DateField(null=True,blank=True)
    dir = models.CharField(max_length=200, default='', null=True)
    added               = models.DateTimeField(auto_now=True)
    rating              = models.IntegerField(default=0)
    serie = models.ForeignKey(Serie, on_delete=models.CASCADE, blank=True, null=True)
    stars = models.ManyToManyField(to='wideocollectorseader.Star', related_name='MovieStars', blank=True,null=True)
    tags = models.ManyToManyField(to='wideocollectorseader.Tag', related_name='Moviestags', blank=True,null=True)

    def save(self, *args, **kwargs):
        super(Movie, self).save(*args, **kwargs)
        init=['UpdateJSON']
        AfterSave(self,init)

    def __str__(self):
        return self.name


