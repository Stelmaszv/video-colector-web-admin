from django.contrib import admin

from .models import (DisLikess, Favourite, Likes, Movie, Producents, Rating,
                     Serie, Star, Tag, Views)

admin.site.register(Producents)
admin.site.register(Serie)
admin.site.register(Tag)
admin.site.register(Star)
admin.site.register(Movie)
admin.site.register(Views)
admin.site.register(Likes)
admin.site.register(DisLikess)
admin.site.register(Favourite)
admin.site.register(Rating)




