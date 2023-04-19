import requests
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

        response = requests.get(self.url+str(self.kwargs.get('pk'))).json()

        if self.request.user.is_authenticated:
            favorites = requests.get(self.check_favorites + str(self.kwargs.get('pk')),
                         auth=(User, Passsward)).json()
            self.favorite = favorites['is_favorite']

        requests.get(self.update_views + str(self.kwargs.get('pk')), auth=(User, Passsward))
        return render(request, self.template_name, {
            'result': response,
            'add_like': self.set_like_url(),
            'add_dislike': self.set_dislike_url(),
            'add_favorite': self.set_add_to_favorite(),
            'stan_favorite' : self.favorite
        })

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

    def set_url(self):
        pass

    def get(self, request, *args, **kwargs):
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


        self.set_url()

        response = requests.get(self.url+'?page='+str(self.page)).json()

        return render(request, self.template_name, {
            'title'  : self.title,
            'results': response['results'],
            'data' : {
                'count'        : response['count'],
                'next'         : response['next'],
                'previous'     : response['previous'],
                'id'           : self.id,
                'place'        : self.place,
                'head'         : self.head,
                'base_url'     : self.base_url,
                'height'       : self.height,
                'next_page_url': self.next_page(),
                'previous_page_url': self.previous_page()
            }
        })


    def previous_page(self):
        self.page = self.page - 2
        url = '?page=' + str(self.page);

        if "title" in self.request.GET:
            url = url + '&title=' + self.title
        if "id" in self.request.GET:
            url = url + '&id=' + self.id
        if "place" in self.request.GET:
            url = url + '&place=' + self.place

        if 'pk' in self.kwargs:
            return reverse(self.reverse,kwargs={"pk": self.kwargs.get('pk')})+url;
        return reverse(self.reverse) + url;

    def next_page(self):
        self.page = self.page + 1
        url = '?page='+str(self.page);

        if "title" in self.request.GET:
            url = url + '&title='+self.title
        if "id" in self.request.GET:
            url = url + '&id=' + self.id
        if "place" in self.request.GET:
            url = url + '&place=' + self.place

        if 'pk' in self.kwargs:
            return reverse(self.reverse, kwargs={"pk": self.kwargs.get('pk')}) + url;
        return reverse(self.reverse) + url;

class MoviesBase(Base):

    head = 'Movies'
    title = 'Movies'
    base_url = 'movie'
    reverse = 'webapp:movies'
    height = 30

class GaleryBase(Base):

    title = 'Galery'
    template_name = 'galery.html'

class StarsBase(Base):

    head = 'Stars'
    title = 'Stars'
    base_url = 'star'
    template_name = 'stars.html'
    height = 15
    reverse = 'webapp:stars'

class SeriesBase(Base):

    head = 'Series'
    title = 'Series'
    base_url = 'serie'
    reverse = 'webapp:series'
    height = 14

class ProducentBase(Base):

    head = 'Producent'
    title = 'Producent'
    base_url = 'producent'
    reverse = 'webapp:producents'
    height = 14

class Stars(StarsBase):
    url = 'http://127.0.0.1:8000/api/stars'

class ProducentStar(StarsBase):

    reverse = 'webapp:producentsstar'

    def set_url(self):
        self.url = 'http://127.0.0.1:8000/api/producentsstar/' + self.id

class SeriesStar(StarsBase):

    reverse = 'webapp:seriesstar'

    def set_url(self):
        self.url = 'http://127.0.0.1:8000/api/series/stars/' + self.id

class Producents(ProducentBase):
    url = 'http://127.0.0.1:8000/api/producents'

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

class Star(BaseId):

    reverse = 'webapp:star'
    url = "http://127.0.0.1:8000/api/star/"
    template_name = 'star.html'

    add_like_url = "http://127.0.0.1:8000/api/staraddtolike/"
    add_dislike_url = "http://127.0.0.1:8000/api/staraddtodislike/"
    add_to_favorite = "http://127.0.0.1:8000/api/favorite/star/"
    check_favorites = "http://127.0.0.1:8000/api/favoriteis/stars/"
    update_views = "http://127.0.0.1:8000/api/starupdateviews/"

class Serie(BaseId):

    reverse = 'webapp:serie'
    url = "http://127.0.0.1:8000/api/serie/"
    template_name = 'serie.html'

    add_like_url = "http://127.0.0.1:8000/api/serieaddtolike/"
    add_dislike_url = "http://127.0.0.1:8000/api/serieaddtosislike/"
    add_to_favorite = "http://127.0.0.1:8000/api/favorite/serie/"
    check_favorites = "http://127.0.0.1:8000/api/favoriteis/series/"
    update_views = "http://127.0.0.1:8000/api/serieupdateview/"

class Producent(BaseId):

    reverse = 'webapp:producet'
    url = "http://127.0.0.1:8000/api/producent/"
    template_name = 'producent.html'

    add_like_url = "http://127.0.0.1:8000/api/producentaddtolike/"
    add_dislike_url = "http://127.0.0.1:8000/api/producentaddtodislike/"
    add_to_favorite = "http://127.0.0.1:8000/api/favorite/producent/"
    check_favorites = "http://127.0.0.1:8000/api/favoriteis/producents/"
    update_views = "http://127.0.0.1:8000/api/producentupdateviews/"

class StarsMovie(MoviesBase):

    reverse = 'webapp:moviessithstars'

    def set_url(self):
        self.url = 'http://127.0.0.1:8000/api/starsmovie/'+self.id

class MoviesInSerie(MoviesBase):

    reverse = 'webapp:moviesinserie'

    def set_url(self):
        self.url = 'http://127.0.0.1:8000/api/seriemoviesview/'+self.id

class MoviesInProducent(MoviesBase):

    reverse = 'webapp:moviesinproducent'

    def set_url(self):
        self.url = 'http://127.0.0.1:8000/api/producentsmovies/'+self.id

class MoviesWithStars(MoviesBase):

    reverse = 'webapp:movieswithstars'

    def set_url(self):
        self.url = 'http://127.0.0.1:8000/api/movieswithstars/'+self.id

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
        self.url = 'http://127.0.0.1:8000/api/producentsseries/'+self.id