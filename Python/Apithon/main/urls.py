from django.conf.urls import url
from main import views

urlpatterns = [
    url(r'^api/countries$', views.countries_list),
    url(r'^api/countries/(?P<pk>[0-9]+)$', views.countries_detail)

]
