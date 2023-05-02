from django.shortcuts import render
from django.views.generic.base import TemplateView

class StartView(TemplateView):
    template_name = 'start_view.html'
