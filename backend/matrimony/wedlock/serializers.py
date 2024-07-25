from rest_framework import serializers

from common.fields import RelatedObjectField
from wedlock.models import *
from accounts.serializers import BaseUserSerializer, ProfessionSerializer
from accounts.models import *


class FamilySerializer(serializers.ModelSerializer):
    class Meta:
        """Meta info"""
        model = FamilyInfo
        fields = "__all__"


class PreferenceSerializer(serializers.ModelSerializer):
    religion = serializers.SerializerMethodField(required=False)
    caste = RelatedObjectField(model=Caste, write_only=True)

    class Meta:
        """Meta info"""
        model = Preferences
        fields = "__all__"

    def get_religion(self, instance):
        """Function to check teacher has verfied all students documents"""

        data = {
            'religion': instance.caste.religion.id,
            'religion_name': instance.caste.religion.name,
            'caste': instance.caste.id,
            'caste_name': instance.caste.name
        }
        return data


class CasteSerializer(serializers.ModelSerializer):
    class Meta:
        """Meta info"""
        model = Caste
        fields = "__all__"


class ReligionSerializer(serializers.ModelSerializer):
    class Meta:
        """Meta info"""
        model = Religion
        fields = "__all__"


class ClientSerializer(serializers.ModelSerializer):
    religion = serializers.SerializerMethodField(required=False)
    caste = RelatedObjectField(model=Caste, write_only=True)
    user = BaseUserSerializer(read_only=True)
    preference_info = serializers.SerializerMethodField(
        read_only=True, required=False)
    family_info = serializers.SerializerMethodField(
        read_only=True, required=False)
    professional_info = serializers.SerializerMethodField(
        read_only=True, required=False)

    class Meta:
        """Meta info"""
        model = Client
        fields = "__all__"

    def get_preference_info(self, instance):
        """Function to check teacher has verified all students documents"""

        preference = instance.preference
        serializer = PreferenceSerializer(preference)
        return serializer.data

    def get_family_info(self, instance):
        """Function to check teacher has verified all students documents"""

        family = instance.family
        serializer = FamilySerializer(family)
        return serializer.data

    def get_professional_info(self, instance):
        """Function to check teacher has verified all students documents"""

        profession = instance.user.profession
        serializer = ProfessionSerializer(profession)
        return serializer.data

    def get_religion(self, instance):
        """Function to check teacher has verfied all students documents"""

        data = {
            'religion': instance.caste.religion.id,
            'religion_name': instance.caste.religion.name,
            'caste': instance.caste.id,
            'caste_name': instance.caste.name
        }
        return data


class BaseClientSerializer(serializers.ModelSerializer):
    class Meta:
        """Meta info"""
        model = Client
        fields = "__all__"


class LikeSerializer(serializers.ModelSerializer):
    class Meta:
        """Meta info"""
        model = UserLike
        fields = "__all__"


class InterestSerializer(serializers.ModelSerializer):
    # requested = serializers.IntegerField(required=False, allow_null=True)
    class Meta:
        """Meta info"""
        model = UserInterest
        fields = "__all__"

    def create(self, validated_data):
        """override create to get or create a intrest object to avoid
        duplicate intrest creation"""

        interest, created = UserInterest.objects.get_or_create(
            owner=validated_data['owner'], receiver=validated_data['receiver'])

        return interest


class ChatSerializer(serializers.ModelSerializer):
    """Serializer for Chats"""
    is_sender = serializers.SerializerMethodField(required=False)

    class Meta:
        """Meta info"""
        model = Chat
        fields = "__all__"

    def get_is_sender(self, instance):
        """Function to check teacher has verfied all students documents"""

        flag = False

        request = self.context.get('request')

        user_id = request.headers.get('User-ID')
        request_user = ProjectUser.objects.get(id=user_id)

        print(request_user.client ,instance.sender)

        if request_user.client.id == instance.sender.id:
            flag = True

        return flag
