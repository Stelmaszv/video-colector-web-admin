import json
import os
import shutil
from django.core.validators import MaxValueValidator, MinValueValidator
from django.conf.global_settings import AUTH_USER_MODEL
from django.db import models
from core.setings import get_josn_file

def set_model(Model):
    def set_avg(Model):
        query=Model.ratings.all()
        all = len(query)
        if all > 0:
            sum=0
            for Rate in query:
                sum=sum+Rate.rate
            return sum/all
        return 0
    Model.avg_rating = set_avg(Model)
    Model.likes_count = Model.likes.count()
    Model.disLikes_count = Model.disLikes.count()
    Model.ratings_count = Model.ratings.count()
    Model.views_count = Model.views.count()
    if hasattr(Model, "movies_count"):
        Model.movies_count = Model.movies.count()
    return Model

def delete(Model,self):
    save_mode = get_josn_file()['delete']
    if save_mode:
        shutil.rmtree(self.web_dir)
        if hasattr(Model,"web_src"):
            os.remove(self.web_src)
        super(Model, self).delete()
    super(Model, self).delete()


def save(Model,self):
    save_mode = get_josn_file()['udpdate_relation']
    if save_mode:
        set_model(self)
        #UpdateJSON(self)
        super(Model, self).save()
    super(Model, self).save()

def UpdateJSON(Model):

    def return_stars(Model):
        stars=[]
        for star in Model.stars.all():
            stars.append(star.name)
        return stars

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

    def return_producent_series(Model):
        data=[]
        data.append(Model.Producent.name)
        return data

    def return_fields(Model):
        allow_fields=["show_name","description","date_relesed","country","weight",
                        "height","ethnicity","hair_color","birth_place","nationality","poster",
                        "banner","avatar","date_of_birth"]

        fields = []
        for field in Model._meta.get_fields():
            if field.name in allow_fields:
                if field.name != "date_relesed" and field.name != "date_of_birth":
                    if hasattr(Model, field.name):
                        fields.append({"db": field.name, "value": str(getattr(Model, field.name))})
                    else:
                        if hasattr(Model, "date_relesed"):
                            fields.append(
                                {"db": field.name, "value": add_data_to_JSON(Model.date_relesed), "data": "True"}
                            )
        return fields

    def retrun_config_json(Model):
        data={}
        data['fields']=  return_fields(Model)
        data['tags']  =  return_tags(Model)
        if hasattr(Model, "Producent"):
            data['producent'] = return_producent_series(Model)
        if hasattr(Model, "stars"):
            data['stars'] =  return_stars(Model)
        return json.dumps(data)

    config=Model.dir + '/config.JSON'
    if os.path.exists(config):
        os.remove(config)
    f = open(config, "x")
    f.write(retrun_config_json(Model))
    f.close()

class Views(models.Model):
    User = models.ForeignKey(AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True, null=True)
    added = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.id)+" - "+str(self.User)+" - "+str(self.added)

class Likes(models.Model):
    User = models.ForeignKey(AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True, null=True)
    added = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.id)+" - "+str(self.User)+" - "+str(self.added)

class DisLikess(models.Model):
    User = models.ForeignKey(AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True, null=True)
    added = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.id)+" - "+str(self.User)+" - "+str(self.added)

class Rating(models.Model):
    User = models.ForeignKey(AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True, null=True)
    rate = models.IntegerField(default=0,validators=[MinValueValidator(1),MaxValueValidator(5)])
    added = models.DateTimeField(auto_now=True)

    def __str__(self):
        return "Rate "+str(self.rate)+" - "+str(self.User)+" - "+str(self.added)

class Producents(models.Model):
    name      = models.CharField(max_length=200,null=True,blank=True)
    banner    = models.CharField(max_length=200, default='',null=True,blank=True)
    show_name = models.CharField(max_length=200,default='',null=True,blank=True)
    avatar = models.CharField(max_length=200, default='',null=True,blank=True)
    dir = models.CharField(max_length=200, default='',null=True,blank=True)
    web_dir = models.CharField(max_length=200, default='', null=True,blank=True)
    country = models.CharField(max_length=200, default='',null=True,blank=True)
    description = models.TextField(default='',null=True,blank=True)
    year        = models.DateField(null=True,blank=True)
    years = models.CharField(max_length=200, default='', null=True, blank=True)
    added       = models.DateTimeField(auto_now=True)
    avg_rating = models.DecimalField(default=0,max_digits=5, decimal_places=2)
    likes_count = models.IntegerField(default=0)
    disLikes_count = models.IntegerField(default=0)
    ratings_count = models.IntegerField(default=0)
    views_count = models.IntegerField(default=0)
    movies = models.ManyToManyField(to='wideocollectorseader.Movie', related_name='ProducentsMovie', blank=True)
    series = models.ManyToManyField(to='wideocollectorseader.Serie', related_name='ProducentsSerie', blank=True)
    views = models.ManyToManyField(to='wideocollectorseader.Views', related_name='ProducentsViews', blank=True)
    likes = models.ManyToManyField(to='wideocollectorseader.likes', related_name='Producentslikes', blank=True)
    disLikes = models.ManyToManyField(to='wideocollectorseader.DisLikess', related_name='ProducentDisLike', blank=True)
    ratings = models.ManyToManyField(to='wideocollectorseader.Rating', related_name='ProducentRating',blank=True)
    tags = models.ManyToManyField(to='wideocollectorseader.Tag', related_name='producentstags', blank=True)

    def set_years(self):
        save_mode = get_josn_file()['udpdate_relation']
        if self.years == '' and save_mode:
            small=None
            big=None
            if self.years =='':
                for Movie in self.movies.all():
                    if Movie.date_relesed is not None:
                        data=Movie.date_relesed
                        if small == None or small > data.year:
                            small = data.year

                        if big == None or big < data.year:
                            big = data.year

                if small is not None and big is not None:
                    self.years=str(small)+' - '+str(big)

    def set_country(self):
        save_mode = get_josn_file()['udpdate_relation']
        if self.country != '' and save_mode:
            for Serie in self.series.all():
                Serie.country = self.country
                Serie.save()

    def save(self, *args, **kwargs):
        self.set_country()
        self.set_years()
        save(Producents, self)

    def __str__(self):
        return self.name

class Serie(models.Model):
    name                = models.CharField(max_length=200,null=True,blank=True)
    banner              = models.CharField(max_length=200, default='',null=True,blank=True)
    show_name           = models.CharField(max_length=200,default='',null=True,blank=True)
    avatar              = models.CharField(max_length=200, default='',null=True,blank=True)
    dir                 = models.CharField(max_length=200, default='',null=True,blank=True)
    web_dir = models.CharField(max_length=200, default='', null=True,blank=True)
    country             = models.CharField(max_length=200, default='',null=True,blank=True)
    description         = models.TextField(default='',null=True,blank=True)
    added               = models.DateTimeField(auto_now=True)
    years               = models.CharField(max_length=200, default='', null=True,blank=True)
    number_of_sezons    = models.IntegerField(default=0)
    avg_rating = models.DecimalField(default=0,max_digits=5, decimal_places=2)
    likes_count = models.IntegerField(default=0)
    disLikes_count = models.IntegerField(default=0)
    ratings_count = models.IntegerField(default=0)
    views_count = models.IntegerField(default=0)
    Producent = models.ForeignKey(Producents, on_delete=models.CASCADE,blank=True,null=True)
    tags = models.ManyToManyField(to='wideocollectorseader.Tag', related_name='serietags', blank=True)
    movies = models.ManyToManyField(to='wideocollectorseader.Movie', related_name='SerieMovie', blank=True)
    views = models.ManyToManyField(to='wideocollectorseader.Views', related_name='SerieViews', blank=True)
    likes = models.ManyToManyField(to='wideocollectorseader.likes', related_name='Serielikes', blank=True)
    disLikes = models.ManyToManyField(to='wideocollectorseader.DisLikess', related_name='SerieDisLike', blank=True)
    ratings = models.ManyToManyField(to='wideocollectorseader.Rating', related_name='SerieRating',blank=True)

    def set_country(self):
        save_mode = get_josn_file()['udpdate_relation']
        if self.country !='' and save_mode:
            for Movie in self.movies.all():
                Movie.country=self.country
                Movie.save()

    def set_years(self):
        small=None
        big=None
        if self.years =='':
            for Movie in self.movies.all():
                if Movie.date_relesed is not None:
                    data=Movie.date_relesed
                    if small == None or small > data.year:
                        small = data.year

                    if big == None or big < data.year:
                        big = data.year

            if small is not None and big is not None:
                self.years=str(small)+' - '+str(big)

    def save(self, *args, **kwargs):
        save_mode = get_josn_file()['udpdate_relation']
        if save_mode:
            self.set_country()
            self.set_years()
        save(Serie, self)

    def delete(self, *args, **kwargs):
        delete(Serie, self)

    def __str__(self):
        return self.name

class Tag(models.Model):
    name = models.CharField(max_length=200)
    def __str__(self):
        return self.name

class Star(models.Model):
    name = models.CharField(max_length=200,null=True,blank=True)
    avatar = models.CharField(max_length=200, default='', null=True,blank=True)
    show_name = models.CharField(max_length=200, default='', null=True,blank=True)
    description = models.TextField(default='', null=True,blank=True)
    weight      = models.IntegerField(default=0, null=True,blank=True)
    height     = models.IntegerField(default=0, null=True,blank=True)
    ethnicity = models.CharField(max_length=200, default='', null=True,blank=True)
    hair_color = models.CharField(max_length=200, default='', null=True,blank=True)
    birth_place = models.CharField(max_length=200, default='', null=True,blank=True)
    nationality = models.CharField(max_length=200, default='', null=True,blank=True)
    dir = models.CharField(max_length=200, default='', null=True)
    web_dir = models.CharField(max_length=200, default='', null=True)
    series = models.ManyToManyField(to='wideocollectorseader.Serie', related_name='StarSerie', blank=True)
    tags = models.ManyToManyField(to='wideocollectorseader.Tag', related_name='Starstags', blank=True)
    date_of_birth = models.DateField(null=True,blank=True)
    added               = models.DateTimeField(auto_now=True)
    avg_rating = models.DecimalField(default=0,max_digits=5, decimal_places=2)
    likes_count = models.IntegerField(default=0)
    disLikes_count = models.IntegerField(default=0)
    ratings_count = models.IntegerField(default=0)
    views_count = models.IntegerField(default=0)
    movies_count = models.IntegerField(default=0)
    movies              = models.ManyToManyField(to='wideocollectorseader.Movie', related_name='StarsMovies', blank=True)
    views = models.ManyToManyField(to='wideocollectorseader.Views', related_name='StarViews', blank=True)
    likes = models.ManyToManyField(to='wideocollectorseader.likes', related_name='Starlikes', blank=True)
    disLikes = models.ManyToManyField(to='wideocollectorseader.DisLikess', related_name='StarDisLike', blank=True)
    ratings = models.ManyToManyField(to='wideocollectorseader.Rating', related_name='StarRating',blank=True)

    def save(self, *args, **kwargs):
        save(Star, self)

    def delete(self, *args, **kwargs):
        delete(Star, self)

    def __str__(self):
        return self.name

class Movie(models.Model):
    name = models.CharField(max_length=200,null=True)
    show_name = models.CharField(max_length=200, default='', null=True,blank=True)
    avatar = models.CharField(max_length=200, default='', null=True,blank=True)
    src = models.CharField(max_length=200, default='', null=True,blank=True)
    web_src = models.CharField(max_length=200, default='', null=True,blank=True)
    poster = models.CharField(max_length=200, default='', null=True,blank=True)
    back_cover = models.CharField(max_length=200, default='', null=True, blank=True)
    front_cover = models.CharField(max_length=200, default='', null=True, blank=True)
    source = models.TextField(default='', null=True,blank=True)
    description = models.TextField(default='', null=True,blank=True)
    country = models.CharField(max_length=200, default='', null=True,blank=True)
    date_relesed = models.DateField(null=True,blank=True)
    dir = models.CharField(max_length=200, default='', null=True,blank=True)
    web_dir = models.CharField(max_length=200, default='', null=True,blank=True)
    added = models.DateTimeField(auto_now=True)
    avg_rating = models.DecimalField(max_digits=5, decimal_places=2,default=0)
    likes_count = models.IntegerField(default=0)
    disLikes_count = models.IntegerField(default=0)
    ratings_count = models.IntegerField(default=0)
    views_count = models.IntegerField(default=0)
    serie = models.ForeignKey(Serie, on_delete=models.CASCADE, blank=True, null=True)
    producent = models.ForeignKey(Producents, on_delete=models.CASCADE, blank=True, null=True)
    stars = models.ManyToManyField(to='wideocollectorseader.Star', related_name='MovieStars', blank=True)
    tags  = models.ManyToManyField(to='wideocollectorseader.Tag', related_name='Moviestags', blank=True)
    views = models.ManyToManyField(to='wideocollectorseader.Views', related_name='MovieViews', blank=True)
    likes = models.ManyToManyField(to='wideocollectorseader.likes', related_name='Movielikes', blank=True)
    disLikes = models.ManyToManyField(to='wideocollectorseader.DisLikess', related_name='MovieDisLike', blank=True)
    ratings = models.ManyToManyField(to='wideocollectorseader.Rating', related_name='MovieRating',blank=True)
    season = models.IntegerField(default=0)

    def save(self, *args, **kwargs):
        save(Movie, self)

    def delete(self, *args, **kwargs):
        delete(Movie,self)

    def __str__(self):
        return self.name

class UserFavorits(models.Model):
    User = models.ForeignKey(AUTH_USER_MODEL, on_delete=models.CASCADE)
    stars = models.ManyToManyField(to='wideocollectorseader.Star', related_name='Stars', blank=True)
    movies = models.ManyToManyField(to='wideocollectorseader.Movie', related_name='Movies', blank=True)
    producents = models.ManyToManyField(to='wideocollectorseader.Producents', related_name='Producents', blank=True)
    series = models.ManyToManyField(to='wideocollectorseader.Serie', related_name='Serie', blank=True)

    def __str__(self):
        return self.User.username

