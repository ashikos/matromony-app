
from django.urls import path
from . import views
from rest_framework import routers
from wedlock import models as wed_models

app_name = "wedlock"


router = routers.SimpleRouter()


router.register(
    r'family', views.FamilyViewSet, basename=wed_models.FamilyInfo)
router.register(
    r'client', views.ClientViewSet, basename=wed_models.Client)
router.register(
    r'preference', views.PreferenceViewSet, basename=wed_models.Preferences)
router.register(
    r'caste', views.CasteViewSet, basename=wed_models.Caste)
router.register(
    r'religion', views.ReligionViewSet, basename=wed_models.Religion)
router.register(
    r'interest', views.InterestViewSet, basename=wed_models.UserInterest)
router.register(
    r'like', views.LikeViewSet, basename=wed_models.UserLike)
router.register(
    r'chat', views.ChatViewSet, basename=wed_models.Chat)


urlpatterns = [
    path('recommendations/<int:id>/', views.RecommendationView.as_view(),
         name='recommend'),
    path('requests/<int:id>/', views.RequestView.as_view(),
         name='reqsts'),
    path('saved/<int:id>/', views.SavedView.as_view(),
         name='saved'),
    path('friends/<int:id>/', views.FriendsView.as_view(),
         name='friends'),
]


urlpatterns += router.urls

