from rest_framework import serializers
from core.wideocollectorseader.models import Movie, Serie, Star,Tag,Producents

class ShortProducent(serializers.ModelSerializer):
    class Meta:
        model=Serie
        fields = ['id','name','show_name','avatar']

class ShortSeries(serializers.ModelSerializer):
    Producent = ShortProducent(many=False)
    class Meta:
        model=Serie
        fields = ['id','name','show_name','avatar','Producent']

class TagsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'

#Producents
class SeriesSerlizerForProducent(ShortSeries):
    pass

class ProducentsSerializer(serializers.ModelSerializer):
    tags   = TagsSerializer(many=True)
    series = SeriesSerlizerForProducent(many=True)
    class Meta:
        model = Producents
        fields = '__all__'

#Stars
class SeriesSerlizerForStars(ShortSeries):
    pass

class StarsSerializer(serializers.ModelSerializer):
    series = SeriesSerlizerForStars(many=True)
    tags = TagsSerializer(many=True)
    class Meta:
        model = Star
        fields = '__all__'

#Movies
class StarsForMovies(serializers.ModelSerializer):
    class Meta:
        model = Star
        fields = '__all__'

class SeriesSerlizerForMovies(serializers.ModelSerializer):
    pass

class MoviesSerializer(serializers.ModelSerializer):
    stars = StarsForMovies(many=True)
    tags  = TagsSerializer(many=True)
    serie = SeriesSerlizerForMovies(many=False)

    class Meta:
        model = Movie
        fields = '__all__'
