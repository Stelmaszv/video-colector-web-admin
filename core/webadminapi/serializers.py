from django.conf.global_settings import AUTH_USER_MODEL
from rest_framework import serializers
from rest_framework.fields import CurrentUserDefault

from core.wideocollectorseader.models import (Movie, Producents, Serie, Star,
                                              Tag, UserFavorits as UserFavoritsModel, Likes,Rating)
from django.contrib.auth import get_user_model
User = get_user_model()

class BaseSeralizer(serializers.ModelSerializer):
    fovorite_item=''
    data_put=None

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        #representation['is_like'] = self.is_like(instance)
        #representation['is_disLikes'] = self.is_disLikes(instance)
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

    def set_data(self,data):
        self.data_put=data

    def is_favourite(self,instance):
        UserFavorits = UserFavoritsModel.objects.filter(User=self.data_put['request'].user).get()
        query= getattr(UserFavorits, self.fovorite_item).filter(id=self.data_put['kwargs'].get("pk"))
        if query:
            return True
        return False

#action
class MoviesRatingView(serializers.ModelSerializer):
    data_put=[]
    class Meta:
        model = Movie
        fields = ['name']

    def set_data(self,data):
        self.data_put=data

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['message'] = 'Rate '+str(self.data_put.get('rate'))+' has added to '+representation['name']
        return representation

class StarsFavoritBase(serializers.ModelSerializer):
    fovorite_item = 'movies'

    class Meta:
        model = Movie
        fields = ['name']

    def set_data(self,data):
        self.data_put=data

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['is_favorite'] = self.is_favourite(instance)
        return representation

    def is_favourite(self,instance):
        UserFavorits = UserFavoritsModel.objects.filter(User=self.data_put['request'].user).get()
        query= getattr(UserFavorits, self.fovorite_item).filter(id=self.data_put['kwargs'].get("pk"))

        if query:
            return True
        return False

class MoviesFavorit(StarsFavoritBase):
    fovorite_item = 'movies'

    class Meta:
        model = Movie
        fields = ['name']


class StarsFavorit(StarsFavoritBase):
    fovorite_item = 'stars'

    class Meta:
        model = Star
        fields = ['name']

class SeriesFavorit(StarsFavoritBase):
    fovorite_item = 'series'

    class Meta:
        model = Star
        fields = ['name']

class ProducentFavorit(StarsFavoritBase):
    fovorite_item = 'producents'

    class Meta:
        model = Star
        fields = ['name']



class MoviesLiksView(serializers.ModelSerializer):
    data_put=[]
    class Meta:
        model = Movie
        fields = ['name']

    def set_data(self,data):
        self.data_put=data

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['message'] = 'Like has added to '+representation['name']
        return representation

class MoviesDisLiksView(serializers.ModelSerializer):
    data_put=[]
    class Meta:
        model = Movie
        fields = ['name']

    def set_data(self,data):
        self.data_put=data

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['message'] = 'Dis Like  has added to '+representation['name']
        return representation

class MoviesViewsView(serializers.ModelSerializer):
    data_put=[]
    class Meta:
        model = Movie
        fields = ['name']

    def set_data(self,data):
        self.data_put=data

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['message'] = 'Views has added to '+representation['name']
        return representation

#Upadates
class ProducetFormSeralizer(serializers.ModelSerializer):
    class Meta:
        model = Producents
        fields = ['id','name']

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
        model=Producents
        fields = ['id','name','show_name','avatar']

class ShortUser(serializers.ModelSerializer):
    class Meta:
        model=User
        fields = ['id','username']

class SerieSlectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Serie
        fields = ['id','name']

class StarSlectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Star
        fields = ['id','name']

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
    fovorite_item = 'series'
    tags   = TagsSerializer(many=True)
    Producent = ProducentForSerieSerializer(many=False)
    class Meta:
        model = Serie
        fields = '__all__'

#Producents
class SeriesSerlizerForProducent(ShortSeries):
    pass

class ProducentsSerializer(BaseSeralizer):
    fovorite_item = 'producents'
    tags   = TagsSerializer(many=True)
    series = SeriesSerlizerForProducent(many=True)
    class Meta:
        model = Producents
        fields = '__all__'

#Stars
class SeriesSerlizerForStars(ShortSeries):
    pass

class StarsSerializer(BaseSeralizer):
    fovorite_item = 'stars'
    series = SeriesSerlizerForStars(many=True)
    tags = TagsSerializer(many=True)
    class Meta:
        model = Star
        fields = '__all__'

#Movies
class ProducentSeralizerForMovie(serializers.ModelSerializer):
    class Meta:
        model = Producents
        fields = '__all__'

class StarsForMovies(serializers.ModelSerializer):
    class Meta:
        model = Star
        fields = '__all__'

class SeriesSerlizerForMovies(ShortSeries):
    pass

class StatsSerializer(serializers.ModelSerializer):
    User = ShortUser(many=False)
    class Meta:
        model = Likes
        fields ='__all__'

class RatingsSerializer(serializers.ModelSerializer):
    User = ShortUser(many=False)
    class Meta:
        model = Rating
        fields ='__all__'

class MoviesSerializer(BaseSeralizer):
    fovorite_item = 'movies'
    stars = StarsForMovies(many=True)
    tags  = TagsSerializer(many=True)
    serie = SeriesSerlizerForMovies(many=False)
    producent =  ProducentSeralizerForMovie(many=False)

    def set_data(self,data):
        self.data_put=data

    class Meta:
        model = Movie
        fields = '__all__'

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation["stars"] = sorted(representation["stars"], key=lambda x: x["views_count"],reverse=True)
        return representation


