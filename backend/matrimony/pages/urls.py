
from django.urls import path
from . import views

app_name = "pages"

urlpatterns = [
    path('Home/', views.HomePageView.as_view(), name='home'),
    path('about/', views.AboutView.as_view(), name='about'),
    path('contact/', views.ContactView.as_view(), name='contact'),

]


