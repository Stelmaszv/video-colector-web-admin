from django.db import models

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
    description = models.TextField(default='', null=True)
    weight      = models.IntegerField(default=0)
    height     = models.IntegerField(default=0)
    ethnicity = models.CharField(max_length=200, default='', null=True)
    hair_color = models.CharField(max_length=200, default='', null=True)
    birth_place = models.CharField(max_length=200, default='', null=True)
    nationality = models.CharField(max_length=200, default='', null=True)
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
    name = models.CharField(max_length=200)
    show_name = models.CharField(max_length=200, default='', null=True)
    view = models.IntegerField(default=0)
    likes = models.IntegerField(default=0)
    avatar = models.CharField(max_length=200, default='', null=True)
    src = models.CharField(max_length=200, default='', null=True)
    favourite = models.BooleanField(default=False)
    poster = models.CharField(max_length=200, default='', null=True)
    description = models.TextField(default='', null=True)
    country = models.CharField(max_length=200, default='', null=True)
    date_relesed = models.DateField(null=True,blank=True)
    dir = models.CharField(max_length=200, default='', null=True)
    added               = models.DateTimeField(auto_now=True)
    rating              = models.IntegerField(default=0)
    serie = models.ForeignKey(Serie, on_delete=models.CASCADE, blank=True, null=True)
    stars = models.ManyToManyField(to='wideocollectorseader.Star', related_name='MovieStars', blank=True)
    tags = models.ManyToManyField(to='wideocollectorseader.Tag', related_name='Moviestags', blank=True)
    def __str__(self):
        return self.name


