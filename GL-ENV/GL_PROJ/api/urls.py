from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('announces/', views.getAnnounces, name="announces"),
    path('announces/<str:pk>/', views.getAnnounce, name="announce"),
]