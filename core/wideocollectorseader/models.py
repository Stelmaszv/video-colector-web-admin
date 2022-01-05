from django.db import models

class Producents(models.Model):
    name      = models.CharField(max_length=200)
    view      = models.IntegerField(default=0)
    likes     = models.IntegerField(default=0)
    favourite = models.BooleanField(default=False)
    banner    = models.CharField(max_length=200, default='',null=True)
    show_name = models.CharField(max_length=200,default='',null=True)
    avatar = models.CharField(max_length=200, default='',null=True)
    dir = models.CharField(max_length=200, default='',null=True)
    country = models.CharField(max_length=200, default='',null=True)
    description = models.TextField(default='',null=True)
    year        = models.DateField(null=True)
    added       = models.DateTimeField(auto_now=True)
    rating      = models.IntegerField(default=0)
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
    def __str__(self):
        return self.name

