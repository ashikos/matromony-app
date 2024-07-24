import datetime
import jwt

from django.shortcuts import render
from django.contrib.auth import authenticate

from rest_framework.views import APIView
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed
from rest_framework import exceptions
from rest_framework import viewsets

from accounts import serializers
from accounts import models as acc_models
from accounts import utilites as acc_utils


class SignupView(APIView):

    def post(self, request):
        serializer = serializers.UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
        else:
            print('invalid serializer', serializer.errors)
            raise exceptions.ValidationError('error in data')
        return Response(serializer.data)


class LoginView(APIView):

    def post(self, request):
        username = request.data['username']
        password = request.data['password']
        user = authenticate(username=username, password=password)

        if not user:
            raise AuthenticationFailed("username or password incorrect")
        user.create_advanced_info()

        payload = {
            "id": user.id,
            "exp": datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
            "iat": datetime.datetime.utcnow()
        }

        token = jwt.encode(payload, "secret", algorithm="HS256")
        response = Response()

        response.set_cookie(key="jwt", value=token, httponly=True)
        response.data = {
            "jwt": token,
            "id": user.id,
            "first_name": user.first_name,
            "last_name": user.last_name,
            "user_type": user.user_type,
            "email": user.email,
            "is_registered": user.is_registered,
            'advanced_info': acc_utils.get_advanced_userInfo(user)
        }

        return response


class UserViewSet(viewsets.ModelViewSet):
    """Model to LIST POST PATCH DELETE user details"""

    serializer_class = serializers.UserSerializer
    queryset = acc_models.ProjectUser.objects.users()


class EducationViewSet(viewsets.ModelViewSet):
    """Model to LIST POST PATCH DELETE user details"""

    serializer_class = serializers.EducationSerializer
    queryset = acc_models.EducationalInfo.objects.all()


class ProfessionViewSet(viewsets.ModelViewSet):
    """Model to LIST POST PATCH DELETE user details"""

    serializer_class = serializers.ProfessionSerializer
    queryset = acc_models.ProfessionalInfo.objects.all()


x='pbkdf2_sha256$600000$DZrkCMBzIc3KBla3CCkMMU$3NniSd9LnW9lB+HCGx0qZk/cpycLpDxaPSbNY2TKqVQ='
y='pbkdf2_sha256$600000$IjB3ubuxKxq4cMtHj0fnL2$BdUVLstI9XZC/VdgRc6qO17aqUBRTAeXJ3Roo7uyjCM='
p='pbkdf2_sha256$600000$1dc6VEyxSTHPTqAW4GTZkX$YmjBM0i6K6FOS/fxZ/WyX+HiXTb4Ee0xg00bGvyj+N8='

