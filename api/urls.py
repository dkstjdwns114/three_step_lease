from django.urls import path
from .views import mainView, cityView, sameAddressView
from . import views

urlpatterns = [
    path('main', views.mainView),
    path('city/<str:pk>/', views.cityView),
    path('same_address/<str:pk>/', views.sameAddressView),
    path('real_time/<str:pk>/', views.realTimeView),
]
