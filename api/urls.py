from django.urls import path
from .views import mainView, cityView, sameCoordinatesView
from . import views

urlpatterns = [
    path('main', views.mainView.as_view()),
    path('city', views.cityView.as_view()),
    path('same_coordinates', views.sameCoordinatesView),
]
