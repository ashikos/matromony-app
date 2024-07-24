
from django.urls import path
from . import views
from rest_framework import routers
from wedlock import models as wed_models

app_name = "payments"

urlpatterns = [
    path('create-check-out/', views.CreateCheckoutSessionView.as_view(),
         name='checkout'),
]

