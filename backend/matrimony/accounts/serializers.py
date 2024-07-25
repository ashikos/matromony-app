from rest_framework import serializers
from rest_framework import exceptions

from accounts.models import *
from rest_framework.exceptions import APIException
from django.db import transaction
from accounts import utilites


class UserSerializer(serializers.ModelSerializer):
    username = serializers.CharField(required=False)

    class Meta:
        """Meta info"""
        model = ProjectUser
        fields = "__all__"

    password = serializers.CharField(write_only=True, required=True)
    image = serializers.ImageField(required=False, allow_null=True)
    advanced_info = serializers.SerializerMethodField(required=False)
    client_id = serializers.SerializerMethodField(read_only=True)

    #
    def get_advanced_info(self, instance):
        """Function to check teacher has verified all students documents"""

        return utilites.get_advanced_userInfo(instance)

    def get_client_id(self, instance):
        """Function to check teacher has verified all students documents"""

        try:
            client_id = instance.client.id
        except:
            raise exceptions.NotFound("client not found")

        return client_id

    @transaction.atomic()
    def create(self, validated_data):
        """overide create to create user"""
        email = validated_data['email']
        if ProjectUser.objects.filter(username=email).exists():
            print("email already existing")
            raise APIException("Email already existings")
        validated_data["username"] = email
        password = validated_data.pop('password')
        user = super().create(validated_data)
        user.set_password(password)
        user.save()
        user.create_advanced_info()
        return user


class BaseUserSerializer(serializers.ModelSerializer):
    client_id = serializers.SerializerMethodField(required=False)
    interest = serializers.SerializerMethodField(required=False)
    requests = serializers.SerializerMethodField(required=False)
    likes = serializers.SerializerMethodField(required=False)

    class Meta:
        """Meta info"""
        model = ProjectUser
        fields = ['id', 'first_name', 'last_name', 'age', 'gender', 'languages',
                  'smoking', 'drinking', 'hobbies', 'phone', 'address', 'email',
                  'district', 'pincode', 'is_employ', 'is_short_term', 'image',
                  'client_id', 'dob', 'interest', 'likes', 'requests', 'tier']

    def get_requests(self, instance):
        """Data of users which owner has received requests"""
        request = self.context.get('request')
        data = {}
        if request:
            try:
                user_id = request.headers.get('User-ID')
                request_user = ProjectUser.objects.get(id=user_id)
                receiver = request_user.client
                interest = wed_models.UserInterest.objects.get(
                    owner=instance.client, receiver=receiver)
                data = {
                    'id': interest.id,
                    'owner': interest.owner.id,
                    'receiver': interest.receiver.id,
                    'is_approved': interest.is_approved,
                    'requested_on': interest.is_approved,
                    'requested': interest.requested,
                }
            except:
                data = {}
        else:
            print("Request is not available in context")
        return data if data else None

    def get_interest(self, instance):
        """Data of users which owner has sent requests"""
        request = self.context.get('request')
        data = {}
        if request:
            try:
                user_id = request.headers.get('User-ID')
                request_user = ProjectUser.objects.get(id=user_id)
                owner = request_user.client
                interest = wed_models.UserInterest.objects.get(
                    owner=owner, receiver=instance.client)
                data = {
                    'id': interest.id,
                    'owner': interest.owner.id,
                    'receiver': interest.receiver.id,
                    'is_approved': interest.is_approved,
                    'requested_on': interest.is_approved,
                    'requested': interest.requested,
                }
            except:
                data = {}
        else:
            print("Request is not available in context")
        return data if data else None

    def get_likes(self, instance):
        request = self.context.get('request')
        data = {}
        if request:
            try:
                user_id = request.headers.get('User-ID')
                request_user = ProjectUser.objects.get(id=user_id)
                owner = request_user.client
                interest = wed_models.UserLike.objects.get(
                    owner=owner, receiver=instance.client)
                data = {
                    'id': interest.id,
                    'owner': interest.owner.id,
                    'receiver': interest.receiver.id,
                    'liked_on': interest.liked_on,
                }
            except:
                data = {}
        else:
            print("Request is not available in context")
        return data if data else None

    def get_client_id(self, instance):
        """Function to check teacher has verified all students documents"""

        try:
            client_id = instance.client.id
        except:
            raise exceptions.NotFound("client not found")

        return client_id


class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        """Meta info"""
        model = EducationalInfo
        fields = "__all__"


class ProfessionSerializer(serializers.ModelSerializer):
    class Meta:
        """Meta info"""
        model = ProfessionalInfo
        fields = "__all__"

#
# class FamilySerializer(serializers.py.ModelSerializer):
#     class Meta:
#         """Meta info"""
#         model = FamilyInfo
#         fields = "__all__"
#
#
# class LifeStyleSerializer(serializers.py.ModelSerializer):
#     class Meta:
#         """Meta info"""
#         model = LifeStyle
#         fields = "__all__"
#
#
# class PreferenceSerializer(serializers.py.ModelSerializer):
#     class Meta:
#         """Meta info"""
#         model = Preferences
#         fields = "__all__"
