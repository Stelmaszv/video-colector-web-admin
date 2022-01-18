from django.contrib import admin
from .models import Producents,Serie,Tag,Star,Movie,ViewsCountStar,LikesCountStar,DisLikesCountStar,ViewsCountMovies,\
    LikesCountMovies,DisLikesCountMovies
admin.site.register(Producents)
admin.site.register(Serie)
admin.site.register(Tag)
admin.site.register(Star)
admin.site.register(Movie)
admin.site.register(ViewsCountStar)
admin.site.register(LikesCountStar)
admin.site.register(DisLikesCountStar)
admin.site.register(ViewsCountMovies)
admin.site.register(LikesCountMovies)
admin.site.register(DisLikesCountMovies)