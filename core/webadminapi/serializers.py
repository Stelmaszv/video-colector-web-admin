from rest_framework import serializers
from rest_framework.fields import CurrentUserDefault

from core.wideocollectorseader.models import Movie, Serie, Star,Tag,Producents

class BaseSeralizer(serializers.ModelSerializer):
    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['is_favourite'] = self.is_favourite(instance)
        representation['is_like'] = self.is_like(instance)
        representation['is_disLikes'] = self.is_disLikes(instance)
        return representation

    def base_is(self,instance,attr):
        array=getattr(instance,attr).all()
        for Fav in array:
            if Fav.User == self.context.get("request"):
                return True
        return False

    def is_disLikes(self, instance):
        return self.base_is(instance,'disLikes')

    def is_like(self, instance):
        return self.base_is(instance, 'likes')

    def is_favourite(self,instance):
        return self.base_is(instance, 'favourite')

#Upadates
class StarsSerializerUpdate(serializers.ModelSerializer):
    class Meta:
        model = Star
        fields = '__all__'

class MoviesSerializerUpdate(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = '__all__'

class SerieSerializerUpdate(serializers.ModelSerializer):
    class Meta:
        model = Serie
        fields = '__all__'

class ProducentsSerializerUpdate(serializers.ModelSerializer):
    class Meta:
        model = Producents
        fields = '__all__'

#Bass
class ShortProducent(serializers.ModelSerializer):
    class Meta:
        model=Serie
        fields = ['id','name','show_name','avatar']

class ShortSeries(serializers.ModelSerializer):
    Producent = ShortProducent(many=False)
    class Meta:
        model=Serie
        fields = ['id','name','show_name','avatar','Producent']

#Serlisers
class TagsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'
#photos
class PhotoSerializerMovie(serializers.Serializer):
    url = serializers.CharField(max_length=200)
class PhotoSerializerSeries(serializers.Serializer):
    url  = serializers.CharField(max_length=200)
    name = serializers.CharField(max_length=200)
#photos
class BannerSerializer(serializers.Serializer):
    url = serializers.CharField(max_length=200)
#Serie
class ProducentForSerieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producents
        fields = '__all__'

class SerieSerializer(BaseSeralizer):
    tags   = TagsSerializer(many=True)
    Producent = ProducentForSerieSerializer(many=False)
    class Meta:
        model = Serie
        fields = '__all__'

#Producents
class SeriesSerlizerForProducent(ShortSeries):
    pass

class ProducentsSerializer(BaseSeralizer):
    tags   = TagsSerializer(many=True)
    series = SeriesSerlizerForProducent(many=True)
    class Meta:
        model = Producents
        fields = '__all__'

#Stars
class SeriesSerlizerForStars(ShortSeries):
    pass

class StarsSerializer(BaseSeralizer):
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

class SeriesSerlizerForMovies(ShortSeries):
    pass

class MoviesSerializer(BaseSeralizer):
    stars = StarsForMovies(many=True)
    tags  = TagsSerializer(many=True)
    serie = SeriesSerlizerForMovies(many=False)

    class Meta:
        model = Movie
        fields = '__all__'


