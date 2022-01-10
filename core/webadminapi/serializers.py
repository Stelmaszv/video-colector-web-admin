from rest_framework import serializers
from core.wideocollectorseader.models import Movie, Serie, Star, Producents,Tag



class TagsSerializer(serializers.ModelSerializer):
    class Meta:
        model=Tag
        fields = ['id', 'name']

class ShortStarsSerializer(serializers.ModelSerializer):
    class Meta:
        model=Star
        fields = ['id','name','show_name','avatar']

class ShortProducentSerializer(serializers.ModelSerializer):
    class Meta:
        model=Producents
        fields = ['id', 'name','show_name','avatar']

class ShortSeriesSerializer(serializers.ModelSerializer):
    Producent= ShortProducentSerializer(many=False)
    class Meta:
        model=Serie
        fields = ['id', 'name','show_name','avatar','Producent']

class MoviesSerializer(serializers.ModelSerializer):
    serie = ShortSeriesSerializer(many=False)
    tags  = TagsSerializer(many=True)
    stars = ShortStarsSerializer(many=True)
    class Meta:
        model = Movie
        fields = ['id', 'name','show_name','view','likes','avatar','src','favourite','poster','description','country',
                  'date_relesed','dir','added','rating','stars','serie','tags']