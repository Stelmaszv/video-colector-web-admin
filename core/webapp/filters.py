from django import template
from django.template.defaultfilters import stringfilter

register = template.Library()


@register.filter(is_safe=True,name="myfilter")
@stringfilter
def myfilter(value):
    return value.lower()

register.filter("myfilter", myfilter)

