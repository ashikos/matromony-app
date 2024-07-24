from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from django.db.models import Q

from wedlock import serializers
from wedlock import models as wed_models
from wedlock import constants as wed_constants
from wedlock import filters as wed_filters
from accounts import models as acc_models
from wedlock import utilites as wd_utils
from accounts import serializers as acc_serilrz


# Create your views here.


class ClientViewSet(viewsets.ModelViewSet):
    """Model to LIST POST PATCH DELETE user details"""

    serializer_class = serializers.ClientSerializer
    queryset = wed_models.Client.objects.all()

    def get_serializer_context(self):
        context = super().get_serializer_context()
        context['request'] = self.request
        return context


class PreferenceViewSet(viewsets.ModelViewSet):
    """Model to LIST POST PATCH DELETE user details"""

    serializer_class = serializers.PreferenceSerializer
    queryset = wed_models.Preferences.objects.all()


class FamilyViewSet(viewsets.ModelViewSet):
    """Model to LIST POST PATCH DELETE user details"""

    serializer_class = serializers.FamilySerializer
    queryset = wed_models.FamilyInfo.objects.all()


class CasteViewSet(viewsets.ModelViewSet):
    """Model to LIST POST PATCH DELETE user details"""

    filterset_class = wed_filters.CasteFilter
    serializer_class = serializers.CasteSerializer
    queryset = wed_models.Caste.objects.all()


class ReligionViewSet(viewsets.ModelViewSet):
    """Model to LIST POST PATCH DELETE user details"""

    serializer_class = serializers.ReligionSerializer
    queryset = wed_models.Religion.objects.all()


class RecommendationView(APIView):
    """View for generating pdf bill"""

    def get(self, request, *args, **kwargs):
        user_id = kwargs['id']
        user = acc_models.ProjectUser.objects.get(id=user_id)
        request.user = user

        profiles = acc_models.ProjectUser.objects.users()
        users = wd_utils.get_preferred_queryset(user, profiles)

        serializer = acc_serilrz.BaseUserSerializer(
            users, many=True, context={'request': request})

        return Response(serializer.data)


class LikeViewSet(viewsets.ModelViewSet):
    """Model to LIST POST PATCH DELETE user details"""

    serializer_class = serializers.LikeSerializer
    queryset = wed_models.UserLike.objects.all()


class InterestViewSet(viewsets.ModelViewSet):
    """Model to LIST POST PATCH DELETE user details"""

    serializer_class = serializers.InterestSerializer
    queryset = wed_models.UserInterest.objects.all()


class RequestView(APIView):
    """View for generating pdf bill"""

    def get(self, request, *args, **kwargs):
        user_id = kwargs['id']
        user = acc_models.ProjectUser.objects.get(id=user_id)
        request.user = user

        interests = wed_models.UserInterest.objects.filter(
            receiver=user.client,
            is_approved=wed_constants.RequestStatus.REQUESTED).order_by(
            "-requested_on")

        print(interests.values("owner__user__first_name", "requested_on"))

        users = acc_models.ProjectUser.objects.filter(
            client__in=interests.values("owner"))
        print(users.values("first_name"))

        serializer = acc_serilrz.BaseUserSerializer(
            users, many=True, context={'request': request})

        return Response(serializer.data)


class SavedView(APIView):
    """View for generating pdf bill"""

    def get(self, request, *args, **kwargs):
        user_id = kwargs['id']
        user = acc_models.ProjectUser.objects.get(id=user_id)
        request.user = user

        likes = wed_models.UserLike.objects.filter(owner=user.client)

        users = acc_models.ProjectUser.objects.filter(
            client__in=likes.values("receiver"))

        serializer = acc_serilrz.BaseUserSerializer(
            users, many=True, context={'request': request})

        return Response(serializer.data)


class FriendsView(APIView):
    """View for generating pdf bill"""

    def get(self, request, *args, **kwargs):
        user_id = kwargs['id']
        user = acc_models.ProjectUser.objects.get(id=user_id)
        request.user = user

        interests = wed_models.UserInterest.objects.filter(
            Q(owner=user.client) | Q(receiver=user.client)).filter(
            is_approved=wed_constants.RequestStatus.APPROVED)

        receivers = acc_models.ProjectUser.objects.filter(
            client__in=interests.values("receiver"))

        owners = acc_models.ProjectUser.objects.filter(
            client__in=interests.values("owner"))

        queryset = receivers | owners
        queryset = queryset.exclude(id=user_id).distinct()

        serializer = acc_serilrz.BaseUserSerializer(
            queryset, many=True, context={'request': request})

        return Response(serializer.data)


class ChatViewSet(viewsets.ModelViewSet):
    """Model to LIST POST PATCH DELETE user details"""

    serializer_class = serializers.ChatSerializer
    filterset_class = wed_filters.ChatFilter
    queryset = wed_models.Chat.objects.all()


class ChatView(APIView):
    """View for generating pdf bill"""

    def get(self, request, *args, **kwargs):
        user_id = kwargs['id']
        user = acc_models.ProjectUser.objects.get(id=user_id)
        request.user = user

        messages = wed_models.Chat.objects.filter(
            Q(owner=user.client) | Q(receiver=user.client)).filter(
            is_approved=wed_constants.RequestStatus.APPROVED)

        receivers = acc_models.ProjectUser.objects.filter(
            client__in=messages.values("receiver"))

        owners = acc_models.ProjectUser.objects.filter(
            client__in=messages.values("owner"))

        queryset = receivers | owners
        queryset = queryset.exclude(id=user_id).distinct()

        serializer = acc_serilrz.BaseUserSerializer(
            queryset, many=True, context={'request': request})

        return Response(serializer.data)