

from django.urls import path
from . import views
from rest_framework import routers
from payments import models as pay_models

app_name = "payments"


router = routers.SimpleRouter()


router.register(
    r'transaction', views.TransactionView, basename=pay_models.Transaction)

urlpatterns = [
    path('create-check-out/', views.CreateCheckoutSessionView.as_view(),
         name='checkout'),
]

urlpatterns = urlpatterns + router.urls