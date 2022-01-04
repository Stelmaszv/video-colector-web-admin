from django.db import models
class Producents(models.Model):
    name      = models.CharField(max_length=200)
    view      = models.IntegerField(default=0)
    likes     = models.IntegerField(default=0)
    favourite = models.BooleanField(default=False)
    banner    = models.CharField(max_length=200, default='',null=True)
    show_name = models.CharField(max_length=200,default='')
    avatar = models.CharField(max_length=200, default='')
    dir = models.CharField(max_length=200, default='')
    country = models.CharField(max_length=200, default='')
    description = models.TextField(default='')
    def __str__(self):
        return self.name

