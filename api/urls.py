from django.urls import path
from .views import mainView, cityView, sameCoordinatesView
from . import views

urlpatterns = [
    path('main', views.mainView),
    path('city/<str:pk>/', views.cityView),
    path('same_coordinates', views.sameCoordinatesView),
]
