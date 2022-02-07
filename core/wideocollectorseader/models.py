import json
import os
import shutil
from django.conf.global_settings import AUTH_USER_MODEL
from django.db import models


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
    return Model

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

    def return_fields(Model):
        allow_fields=["show_name","description","date_relesed","country","weight",
                        "height","ethnicity","hair_color","birth_place","nationality","poster",
                        "banner","avatar","date_of_birth"]
        fields = []
        for field in Model._meta.get_fields():
            if field.name in allow_fields:
                if field.name != "date_relesed" and field.name !=  "date_of_birth":
                    if hasattr(Model,field.name):
                        fields.append({"db": field.name, "value" : str(getattr(Model,field.name))})
                else:
                    if hasattr(Model, "date_relesed"):
                        fields.append(
                            {"db": field.name, "value" : add_data_to_JSON(Model.date_relesed), "data": "True"}
                        )
            return fields

    def retrun_config_json(Model):
        data={}
        data['fields']=  return_fields(Model)
        data['tags']  =  return_tags(Model)
        #data['stars'] =  return_stars(Model) #erorr in main collector
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

class Favourite(models.Model):
    User = models.ForeignKey(AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True, null=True)
    added = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.id)+" - "+str(self.User)+" - "+str(self.added)

class Rating(models.Model):
    User = models.ForeignKey(AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True, null=True)
    rate = models.IntegerField(default=0)
    added = models.DateTimeField(auto_now=True)

    def __str__(self):
        return "Rate "+str(self.rate)+" - "+str(self.User)+" - "+str(self.added)

class Producents(models.Model):
    name      = models.CharField(max_length=200)
    banner    = models.CharField(max_length=200, default='',null=True,blank=True)
    show_name = models.CharField(max_length=200,default='',null=True)
    avatar = models.CharField(max_length=200, default='',null=True)
    dir = models.CharField(max_length=200, default='',null=True)
    country = models.CharField(max_length=200, default='',null=True,blank=True)
    description = models.TextField(default='',null=True,blank=True)
    year        = models.DateField(null=True,blank=True)
    added       = models.DateTimeField(auto_now=True)
    avg_rating = models.DecimalField(default=0,max_digits=5, decimal_places=2)
    likes_count = models.IntegerField(default=0)
    disLikes_count = models.IntegerField(default=0)
    ratings_count = models.IntegerField(default=0)
    views_count = models.IntegerField(default=0)
    series = models.ManyToManyField(to='wideocollectorseader.Serie', related_name='ProducentsSerie', blank=True)
    views = models.ManyToManyField(to='wideocollectorseader.Views', related_name='ProducentsViews', blank=True)
    likes = models.ManyToManyField(to='wideocollectorseader.likes', related_name='Producentslikes', blank=True)
    disLikes = models.ManyToManyField(to='wideocollectorseader.DisLikess', related_name='ProducentDisLike', blank=True)
    favourite = models.ManyToManyField(to='wideocollectorseader.Favourite', related_name='ProducentFavourite', blank=True)
    ratings = models.ManyToManyField(to='wideocollectorseader.Rating', related_name='ProducentRating',
                                       blank=True)
    tags = models.ManyToManyField(to='wideocollectorseader.Tag', related_name='producentstags', blank=True)

    def save(self, *args, **kwargs):
        super(Producents, self).save(*args, **kwargs)
        """
        set_model(self)
        super(Producents, self).save(*args, **kwargs)
        """

    def delete(self, *args, **kwargs):
        super(Producents, self).delete(*args, **kwargs)
        """
        shutil.rmtree(self.dir)
        super(Producents, self).delete(*args, **kwargs)
        """

    def __str__(self):
        return self.name

class Serie(models.Model):
    name                = models.CharField(max_length=200)
    banner              = models.CharField(max_length=200, default='',null=True,blank=True)
    show_name           = models.CharField(max_length=200,default='',null=True)
    avatar              = models.CharField(max_length=200, default='',null=True)
    dir                 = models.CharField(max_length=200, default='',null=True)
    country             = models.CharField(max_length=200, default='',null=True)
    description         = models.TextField(default='',null=True)
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
    favourite = models.ManyToManyField(to='wideocollectorseader.Favourite', related_name='SerieFavourite', blank=True)
    ratings = models.ManyToManyField(to='wideocollectorseader.Rating', related_name='SerieRating',
                                       blank=True)

    def delete(self, *args, **kwargs):
        super(Serie, self).delete(*args, **kwargs)
        """
        shutil.rmtree(self.dir)
        super(Serie, self).delete(*args, **kwargs)
        """

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        #set_model(self)
        super(Serie, self).save(*args, **kwargs)
        """
        set_model(self)
        super(Serie, self).save(*args, **kwargs)
        UpdateJSON(self)
        """

class Tag(models.Model):
    name = models.CharField(max_length=200)
    def __str__(self):
        return self.name

class Star(models.Model):
    name = models.CharField(max_length=200)
    avatar = models.CharField(max_length=200, default='', null=True)
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
    avg_rating = models.DecimalField(default=0,max_digits=5, decimal_places=2)
    likes_count = models.IntegerField(default=0)
    disLikes_count = models.IntegerField(default=0)
    ratings_count = models.IntegerField(default=0)
    views_count = models.IntegerField(default=0)
    movies              = models.ManyToManyField(to='wideocollectorseader.Movie', related_name='StarsMovies', blank=True)
    views = models.ManyToManyField(to='wideocollectorseader.Views', related_name='StarViews', blank=True)
    likes = models.ManyToManyField(to='wideocollectorseader.likes', related_name='Starlikes', blank=True)
    disLikes = models.ManyToManyField(to='wideocollectorseader.DisLikess', related_name='StarDisLike', blank=True)
    favourite = models.ManyToManyField(to='wideocollectorseader.Favourite', related_name='StarFavourite', blank=True)
    ratings = models.ManyToManyField(to='wideocollectorseader.Rating', related_name='StarRating',
                                       blank=True)

    def save(self, *args, **kwargs):
        super(Star, self).save(*args, **kwargs)
        """
        set_model(self)
        super(Star, self).save(*args, **kwargs)
        UpdateJSON(self)
        """

    def delete(self, *args, **kwargs):
        super(Star, self).delete(*args, **kwargs)
        """
        shutil.rmtree(self.dir)
        super(Star, self).delete(*args, **kwargs)
        """

    def __str__(self):
        return self.name

class Movie(models.Model):
    name = models.CharField(max_length=200,null=True)
    show_name = models.CharField(max_length=200, default='', null=True,blank=True)
    avatar = models.CharField(max_length=200, default='', null=True)
    src = models.CharField(max_length=200, default='', null=True)
    poster = models.CharField(max_length=200, default='', null=True,blank=True)
    description = models.TextField(default='', null=True,blank=True)
    country = models.CharField(max_length=200, default='', null=True,blank=True)
    date_relesed = models.DateField(null=True,blank=True)
    dir = models.CharField(max_length=200, default='', null=True)
    added               = models.DateTimeField(auto_now=True)
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
    favourite = models.ManyToManyField(to='wideocollectorseader.Favourite', related_name='MovieFavourite', blank=True)
    ratings = models.ManyToManyField(to='wideocollectorseader.Rating', related_name='MovieRating',blank=True)


    def delete(self, *args, **kwargs):
        super(Movie, self).delete(*args, **kwargs)
        """"
        ##shutil.rmtree(self.dir)
        ##os.remove(self.src)
        ##super(Movie, self).delete(*args, **kwargs)
        """

    def save(self, *args, **kwargs):
        #set_model(self)
        super(Movie, self).save(*args, **kwargs)
        """
        set_model(self)
        super(Movie, self).save(*args, **kwargs)
        UpdateJSON(self)
        """
    def __str__(self):
        return self.name


