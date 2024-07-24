
from django.urls import path
from . import views
from rest_framework import routers
from accounts import models as acc_models

app_name = "pages"


router = routers.SimpleRouter()

router.register(r'users', views.UserViewSet, basename=acc_models.ProjectUser)
router.register(
    r'education', views.EducationViewSet, basename=acc_models.EducationalInfo)
router.register(
    r'profession', views.ProfessionViewSet, basename=acc_models.ProfessionalInfo)


urlpatterns = [
    path('login/', views.LoginView .as_view()),
    path('signup/', views.SignupView .as_view()),

]


urlpatterns += router.urls

