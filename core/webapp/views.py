import requests
import random
from django.http import HttpResponseRedirect

from django.shortcuts import render
from django.views.generic import TemplateView
from secret import User,Passsward
from django.urls import reverse

class BaseId(TemplateView):

    url = "http://127.0.0.1:8000/api/movie/"
    template_name = 'movie.html'
    reverse = ''
    add_like_url = ''
    add_dislike_url = ''
    add_to_favorite = ''
    check_favorites = ''
    update_views = ''
    check_likes_url = ''
    check_dis_likes_url = ''
    rate_url = ''
    check_rate_url = ''
    favorite = ''
    banner = False

    def get(self, request, *args, **kwargs):

        if "like" in self.request.GET:
            requests.get(self.add_like_url + str(self.kwargs.get('pk')),auth=(User, Passsward))
            return HttpResponseRedirect(reverse(self.reverse, kwargs={"pk": self.kwargs.get('pk')}))

        if "dislike" in self.request.GET:
            requests.get(self.add_dislike_url + str(self.kwargs.get('pk')),auth=(User, Passsward))
            return HttpResponseRedirect(reverse(self.reverse, kwargs={"pk": self.kwargs.get('pk')}))

        if "favorite" in self.request.GET:
            requests.get(self.add_to_favorite + str(self.kwargs.get('pk')),
                         auth=(User, Passsward))
            return HttpResponseRedirect(reverse(self.reverse, kwargs={"pk": self.kwargs.get('pk')}))
        
        if "rate" in self.request.GET:
            requests.get(self.rate_url + str(self.kwargs.get('pk'))+'?rate='+self.request.GET['rate'],auth=(User, Passsward))
            return HttpResponseRedirect(reverse(self.reverse, kwargs={"pk": self.kwargs.get('pk')}))

        response = requests.get(self.url+str(self.kwargs.get('pk'))).json()

        if self.request.user.is_authenticated:
            favorites = requests.get(self.check_favorites + str(self.kwargs.get('pk')),
                         auth=(User, Passsward)).json()
            self.favorite = favorites['is_favorite']

        requests.get(self.update_views + str(self.kwargs.get('pk')), auth=(User, Passsward))
        return render(request, self.template_name, {
            'action': {
                'like'    : self.set_add_like(),
                'dis_like': self.set_add_dis_like(),
                'stan_favorite': self.favorite,
                'set_rating':self.set_rating,
            },
            'banner':self.set_banner(response),
            'rating':self.set_rating(),
            'rattings':range(0,self.set_rating()),
            'rattings_rest': range(0, 5 - self.set_rating()),
            'result': response,
            'add_like': self.set_like_url(),
            'add_dislike': self.set_dislike_url(),
            'add_favorite': self.set_add_to_favorite(),
            'stan_favorite' : self.favorite
        })
        
    def set_banner(self,response):
        if self.banner:
            return self.on_set_baner(response)
            
        return response['banner']

    def set_rating(self):
        if self.request.user.is_authenticated:
            rating = requests.get(self.check_rate_url + '/' + str(self.kwargs.get('pk')), auth=(User, Passsward)).json()

            return rating['rate']
        return 0

    def set_add_like(self):
        if self.request.user.is_authenticated:
            
            likes = requests.get(self.check_likes_url+ '/' +str(self.kwargs.get('pk')),auth=(User, Passsward)).json()
            
            return likes['is_liked'];

    def set_add_dis_like(self):
        if self.request.user.is_authenticated:
            dis_likes = requests.get(self.check_dis_likes_url+ '/' +str(self.kwargs.get('pk')),auth=(User, Passsward)).json()

            return dis_likes['is_dis_liked'];

    def set_like_url(self):
        return reverse(self.reverse, kwargs={"pk": self.kwargs.get('pk')})+'?like=true';

    def set_dislike_url(self):
        return reverse(self.reverse, kwargs={"pk": self.kwargs.get('pk')})+'?dislike=true';

    def set_add_to_favorite(self):
        return reverse(self.reverse, kwargs={"pk": self.kwargs.get('pk')})+'?favorite=true';

class Base(TemplateView):

    url = None
    template_name = 'base_elment.html'
    base_url = ''
    height = 30
    reverse = ''
    name = ''
    serie = ''
    producent = ''
    favorite_url = ''
    page = 1
    filters = []
    series_select = []
    producents_select = []
    favorite = 'false'

    def set_url(self):
        pass
    
    def set_on_get(self):
        pass

    def get(self, request, *args, **kwargs):
        self.set_on_get()
        self.id = None
        self.place = None
        self.page = 1

        if "title" in self.request.GET:
            self.title = self.request.GET['title']

        if "id" in self.request.GET:
            self.id = self.request.GET['id']

        if "place" in self.request.GET:
            self.place = self.request.GET['place']

        if "page" in self.request.GET:
            self.page = int(self.request.GET['page'])
            
        if 'name' in self.request.GET:
            self.name = self.request.GET['name']

        if 'serie' in self.request.GET:
            self.serie = self.request.GET['serie']
            
        if 'producent' in self.request.GET:
            self.producent = self.request.GET['producent']
        
        self.set_url()

        if 'favorite' in self.request.GET:
            self.favorite = self.request.GET['favorite']
            if self.request.GET['favorite'] == 'true':
                url = self.favorite_url+'?page='+str(self.page)+'&name='+self.name+'&serie='+self.serie+'&producent='+self.producent
                response = requests.get(url,auth=(User, Passsward)).json()
            else:
                url = self.url+'?page='+str(self.page)+'&name='+self.name+'&serie='+self.serie+'&producent='+self.producent
                response = requests.get(url).json()
        else:
            url = self.url+'?page='+str(self.page)+'&name='+self.name+'&serie='+self.serie+'&producent='+self.producent
            response = requests.get(url).json()
        
        if 'pk' in self.kwargs:
            print(self.reverse)
            reverseSet = reverse(self.reverse,kwargs={"pk": self.kwargs.get('pk')})
        else:
            reverseSet = reverse(self.reverse) 

        return render(request, self.template_name, {
            'title'   : self.title,
            'results' : response['results'],
            'request_get_full_path' : reverseSet,
            'search' : {
                'series_select'      : self.series_select,
                'producents_select'  : self.producents_select,
                'form':{
                    'name':self.name,
                    'serie':self.serie,
                    'producent':self.producent,
                    'favorite':self.favorite
                },
            },
            'data'    :  {
                'filters'      : self.filters,
                'page'         : self.page,
                'get'          : len(self.request.GET),
                'count'        : response['count'],
                'next'         : response['next'],
                'previous'     : response['previous'],
                'id'           : self.id,
                'place'        : self.place,
                'head'         : self.head,
                'base_url'     : self.base_url,
                'height'       : self.height,
                'next_page_url': self.next_page(self.page),
                'previous_page_url': self.previous_page(self.page)
            }
        })


    def previous_page(self,page):
        npage = page - 1
        url = '?page=' + str(npage);

        if "title" in self.request.GET:
            url = url + '&title=' + self.title
        if "id" in self.request.GET:
            url = url + '&id=' + self.id
        if "place" in self.request.GET:
            url = url + '&place=' + self.place

        if 'pk' in self.kwargs:
            return reverse(self.reverse,kwargs={"pk": self.kwargs.get('pk')})+url+'&name='+self.name;
        return reverse(self.reverse) + url+'&name='+self.name;

    def next_page(self,page):
        npage = page + 1
        url = '?page='+str(npage);

        if "title" in self.request.GET:
            url = url + '&title='+self.title
        if "id" in self.request.GET:
            url = url + '&id=' + self.id
        if "place" in self.request.GET:
            url = url + '&place=' + self.place

        if 'pk' in self.kwargs:
            return reverse(self.reverse, kwargs={"pk": self.kwargs.get('pk')}) + url+'&name='+self.name;
        return reverse(self.reverse) + url+'&name='+self.name;
    
class SeriesSeazon(TemplateView):
    template_name = 'seazons.html'
    page = 1
    reverse = 'webapp:seriesseazonstar'
    
    def get(self, request, *args, **kwargs):
  
        if "page" in self.request.GET:
            self.page = int(self.request.GET['page'])
        
        response = requests.get('http://127.0.0.1:8000/api/serie/season/'+str(self.kwargs.get('pk'))+'/?page='+str(self.page)).json()
        
        return render(request, self.template_name, {
            'results' : response['results'],
            'next'         : response['next'],
            'previous'     : response['previous'],
            'next_page_url': self.next_page(self.page),
            'previous_page_url': self.previous_page(self.page),
            'serie' : {
                'name':response['results'][0]['name'],
                'show_name':response['results'][0]['show_name'],
            }
        })
        
    def previous_page(self,page):
        npage = page - 1
        url = '?page=' + str(npage);

        if "id" in self.request.GET:
            url = url + '&id=' + self.id

        if 'pk' in self.kwargs:
            return reverse(self.reverse,kwargs={"pk": self.kwargs.get('pk')})+url;
        return reverse(self.reverse) + url;
        
    def next_page(self,page):
        npage = page + 1
        url = '?page='+str(npage);

        if "id" in self.request.GET:
            url = url + '&id=' + self.id

        if 'pk' in self.kwargs:
            return reverse(self.reverse, kwargs={"pk": self.kwargs.get('pk')}) + url;
        return reverse(self.reverse) + url;
        
class MoviesBase(Base):

    head = 'Movies'
    title = 'Movies'
    base_url = 'movie'
    reverse = 'webapp:movies'
    template_name = 'movies.html'
    height = 30
    favorite_url = 'http://127.0.0.1:8000/api/favorite/movies'
    filters = ['serie','producent']
    
    def set_on_get(self):
        self.series_select = response = requests.get('http://127.0.0.1:8000/api/series_select').json()
        self.producents_select = response = requests.get('http://127.0.0.1:8000/api/producentsformview').json()

class GaleryBase(Base):

    title = 'Galery'
    template_name = 'galery.html'

class StarsBase(Base):

    head = 'Stars'
    title = 'Stars'
    base_url = 'star'
    template_name = 'stars.html'
    favorite_url = 'http://127.0.0.1:8000/api/favorite/stars'
    height = 15
    reverse = 'webapp:stars'

class SeriesBase(Base):

    head = 'Series'
    title = 'Series'
    base_url = 'serie'
    reverse = 'webapp:series'
    favorite_url = 'http://127.0.0.1:8000/api/favorite/series'
    filters = ['producent']
    height = 30
    template_name = 'series.html'
    
    def set_on_get(self):
        self.producents_select = response = requests.get('http://127.0.0.1:8000/api/producentsformview').json()

class ProducentBase(Base):

    head = 'Producent'
    title = 'Producent'
    base_url = 'producent'
    reverse = 'webapp:producents'
    favorite_url = 'http://127.0.0.1:8000/api/favorite/producents'
    filters = []
    height = 14

class Stars(StarsBase):
    url = 'http://127.0.0.1:8000/api/stars'

class ProducentStar(StarsBase):

    reverse = 'webapp:producentsstar'

    def set_url(self):
        self.url = 'http://127.0.0.1:8000/api/producentsstar/' + str(self.kwargs.get('pk'))

class SeriesStar(StarsBase):

    reverse = 'webapp:seriesstar'

    def set_url(self):
        self.url = 'http://127.0.0.1:8000/api/series/stars/' + str(self.kwargs.get('pk'))

class Producents(ProducentBase):
    url = 'http://127.0.0.1:8000/api/producents'
    template_name = 'producents.html'

class Series(SeriesBase):

    url = 'http://127.0.0.1:8000/api/series'

class Movies(MoviesBase):

    url = 'http://127.0.0.1:8000/api/movies'

class Movie(BaseId):

    reverse = 'webapp:movie'
    url = "http://127.0.0.1:8000/api/movie/"
    template_name = 'movie.html'
    
    add_like_url = "http://127.0.0.1:8000/api/movieaddtolike/"
    add_dislike_url = "http://127.0.0.1:8000/api/movieaddtodislike/"
    add_to_favorite = "http://127.0.0.1:8000/api/favorite/movie/"
    check_favorites = "http://127.0.0.1:8000/api/favoriteis/movies/"
    update_views = "http://127.0.0.1:8000/api/movieaupdateviews"
    check_likes_url = 'http://127.0.0.1:8000/api/liks/movies'
    check_dis_likes_url = 'http://127.0.0.1:8000/api/dislike/movies'
    rate_url = 'http://127.0.0.1:8000/api/movieaddtorating/'
    check_rate_url = 'http://127.0.0.1:8000/api/ratings/movies'

class Star(BaseId):

    reverse = 'webapp:star'
    url = "http://127.0.0.1:8000/api/star/"
    template_name = 'star.html'

    add_like_url = "http://127.0.0.1:8000/api/staraddtolike/"
    add_dislike_url = "http://127.0.0.1:8000/api/staraddtodislike/"
    add_to_favorite = "http://127.0.0.1:8000/api/favorite/star/"
    check_favorites = "http://127.0.0.1:8000/api/favoriteis/stars/"
    update_views = "http://127.0.0.1:8000/api/starupdateviews/"
    check_likes_url = 'http://127.0.0.1:8000/api/liks/stars'
    check_dis_likes_url = 'http://127.0.0.1:8000/api/dislike/stars'
    rate_url = 'http://127.0.0.1:8000/api/staraddrating/'
    check_rate_url = 'http://127.0.0.1:8000/api/ratings/stars'

class Serie(BaseId):

    reverse = 'webapp:serie'
    url = "http://127.0.0.1:8000/api/serie/"
    template_name = 'serie.html'
    banner = True
    add_like_url = "http://127.0.0.1:8000/api/serieaddtolike/"
    add_dislike_url = "http://127.0.0.1:8000/api/serieaddtosislike/"
    add_to_favorite = "http://127.0.0.1:8000/api/favorite/serie/"
    check_favorites = "http://127.0.0.1:8000/api/favoriteis/series/"
    update_views = "http://127.0.0.1:8000/api/serieupdateview/"
    check_likes_url = 'http://127.0.0.1:8000/api/liks/series'
    check_dis_likes_url = 'http://127.0.0.1:8000/api/dislike/series'
    rate_url = 'http://127.0.0.1:8000/api/staraddtorating/'
    check_rate_url = 'http://127.0.0.1:8000/api/ratings/series'
    
    def on_set_baner(self,response):
        series = requests.get('http://127.0.0.1:8000/api/seriesbenners/'+str(self.kwargs.get('pk'))+'/').json()
        if len(series['results']) > 0:
            return random.choice(series['results'])['url']
                
        producents = requests.get('http://127.0.0.1:8000/api/producent/series/banners/'+str(response['Producent']['id'])+'/').json()
        if len(producents['results']) > 0:
            return random.choice(producents['results'])['url']
        
        return response['banner']

class Producent(BaseId):

    reverse = 'webapp:producet'
    url = "http://127.0.0.1:8000/api/producent/"
    template_name = 'producent.html'
    banner = True
    add_like_url = "http://127.0.0.1:8000/api/producentaddtolike/"
    add_dislike_url = "http://127.0.0.1:8000/api/producentaddtodislike/"
    add_to_favorite = "http://127.0.0.1:8000/api/favorite/producent/"
    check_favorites = "http://127.0.0.1:8000/api/favoriteis/producents/"
    update_views = "http://127.0.0.1:8000/api/producentupdateviews/"
    check_likes_url = 'http://127.0.0.1:8000/api/liks/producents'
    check_dis_likes_url = 'http://127.0.0.1:8000/api/dislike/producents'
    rate_url = 'http://127.0.0.1:8000/api/producentaddtorating/'
    check_rate_url = 'http://127.0.0.1:8000/api/ratings/producents'
    
    def on_set_baner(self,response):
        producents = requests.get('http://127.0.0.1:8000/api/producent/series/banners/'+str(self.kwargs.get('pk'))+'/').json()
        
        if len(producents['results']) > 0:
            return random.choice(producents['results'])['url']
        
        return response['banner']

class StarsMovie(MoviesBase):

    reverse = 'webapp:moviessithstars'

    def set_url(self):
        self.url = 'http://127.0.0.1:8000/api/starsmovie/'+str(self.kwargs.get('pk'))

class MoviesInSerie(MoviesBase):

    reverse = 'webapp:moviesinserie'

    def set_url(self):
        self.url = 'http://127.0.0.1:8000/api/seriemoviesview/'+str(self.kwargs.get('pk'))

class MoviesInProducent(MoviesBase):

    reverse = 'webapp:moviesinproducent'

    def set_url(self):
        self.url = 'http://127.0.0.1:8000/api/producentsmovies/'+str(self.kwargs.get('pk'))

class MoviesWithStars(MoviesBase):

    reverse = 'webapp:movieswithstars'

    def set_url(self):
        self.url = 'http://127.0.0.1:8000/api/starsmovie/'+str(self.kwargs.get('pk'))

class SerieGalery(GaleryBase):

    reverse = 'webapp:seriephoto'

    def set_url(self):
        self.url = 'http://127.0.0.1:8000/api/series/photo/'+str(self.kwargs.get('pk'))

class ProducentGalery(GaleryBase):

    reverse = 'webapp:producentphoto'

    def set_url(self):
        self.url = 'http://127.0.0.1:8000/api/producent/photos/'+str(self.kwargs.get('pk'))

class StarsGalery(GaleryBase):

    reverse = 'webapp:starsphoto'

    def set_url(self):
        self.url = 'http://127.0.0.1:8000/api/stars/photo/'+str(self.kwargs.get('pk'))

class MovieGalery(GaleryBase):

    reverse = 'webapp:moviephoto'

    def set_url(self):
        self.url = 'http://127.0.0.1:8000/api/moviephotosview/'+str(self.kwargs.get('pk'))

class SeriesInProducent(SeriesBase):

    reverse = 'webapp:seriesinproducent'

    def set_url(self):
        self.url = 'http://127.0.0.1:8000/api/producentsseries/'+str(self.id)

class Start(TemplateView):

    template_name = 'index.html'
    order = None
    section = None

    def get(self, request, *args, **kwargs):

        if "order" in self.request.GET:
            self.order = self.request.GET['order']

        if "section" in self.request.GET:
            self.section = self.request.GET['section']

        return render(request, self.template_name, {
            "section" : self.section,
            "movies": self.get_url_top('http://127.0.0.1:8000/api/top/movies','views')['results'],
            "movies_count" : self.get_url_top('http://127.0.0.1:8000/api/top/movies','views')['count'],
            "stars" : self.get_url_top('http://127.0.0.1:8000/api/top/stars', 'views')['results'],
            "stars_count": self.get_url_top('http://127.0.0.1:8000/api/top/stars', 'views')['count'],
            "series": self.get_url_top('http://127.0.0.1:8000/api/top/series', 'views')['results'],
            "series_count": self.get_url_top('http://127.0.0.1:8000/api/top/series', 'views')['count'],
            "producents": self.get_url_top('http://127.0.0.1:8000/api/top/producents', 'views')['results'],
            "producents_count": self.get_url_top('http://127.0.0.1:8000/api/top/producents', 'views')['count'],
        })

    def get_url_top(self,url,order):
        if self.order == None:
            return requests.get(url + '?order=' + order).json()
        return requests.get(url + '?order=' + self.order).json()