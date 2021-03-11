from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('same_coordinates', index),
    path('city/<str:pk>/', index),
]