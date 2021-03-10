from django.urls import path
from .views import mainView
from . import views

urlpatterns = [
    path('main', views.mainView.as_view()),
]
