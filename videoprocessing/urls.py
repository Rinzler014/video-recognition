from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    
    path("", views.index, name="index"),
    path("get_coordinates", views.get_coordinates, name="get_coordinates"),

]