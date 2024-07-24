from django.db import models
from django.contrib.auth.models import AbstractUser

from accounts import constants
from wedlock import models as wed_models

from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager


class ProjectUserQuerySet(models.QuerySet):
    def admins(self):
        return self.filter(user_type=constants.UserTypes.Admin)

    def users(self):
        return self.exclude(user_type=constants.UserTypes.Admin)


class ProjectUserManager(BaseUserManager):
    def get_queryset(self):
        return ProjectUserQuerySet(self.model, using=self._db)

    def admins(self):
        return self.get_queryset().admins()

    def users(self):
        return self.get_queryset().users()

    def get_by_natural_key(self, username):
        return self.get(username=username)

    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_user(email, password, **extra_fields)


class ProjectUser(AbstractUser):
    """Model to store extra details of user"""
    dob = models.DateField(null=True, blank=True)
    place_of_birth = models.CharField(
        max_length=100, null=True, blank=True, default='')
    age = models.IntegerField(null=True, blank=True)
    gender = models.IntegerField(
        choices=constants.GenderTypes.choices(), null=True, blank=True)
    languages = models.CharField(
        max_length=100, null=True, blank=True, default='')
    image = models.ImageField(
        upload_to='profile_pictures/',
        null=True, default=None, blank=True)
    user_type = models.IntegerField(
        choices=constants.UserTypes.choices(), default=constants.UserTypes.User,
        null=True, blank=True)
    tier = models.IntegerField(
        choices=constants.TierTypes.choices(), default=constants.TierTypes.FREE,
        null=True, blank=True)
    district = models.IntegerField(
        null=True, blank=True, choices=constants.DistrictChoices.choices())
    smoking = models.IntegerField(
        null=True, blank=True, choices=constants.SmokeChoices.choices())
    drinking = models.IntegerField(
        null=True, blank=True, choices=constants.DrinkingChoices.choices())
    hobbies = models.CharField(
        max_length=100, null=True, blank=True, default='')
    phone = models.CharField(
        max_length=100, null=True, blank=True, default='')
    address = models.TextField(
        max_length=100, null=True, blank=True, default='')
    pincode = models.CharField(
        max_length=20, default='', null=True, blank=True)
    is_registered = models.BooleanField(null=True, blank=True, default=False)
    is_employ = models.BooleanField(null=True, blank=True)
    is_short_term = models.BooleanField(null=True, blank=True)

    objects = ProjectUserManager()

    def __str__(self):
        return self.first_name

    def create_advanced_info(self):
        """Function to get or create advanced info objetcs for every user at
         time of login or signup"""
        client, created = wed_models.Client.objects.get_or_create(user=self)
        print(client)
        EducationalInfo.objects.get_or_create(user=self)
        ProfessionalInfo.objects.get_or_create(user=self)
        wed_models.FamilyInfo.objects.get_or_create(user=client)
        # wed_models.Preferences.objects.get_or_create(user=client)
        return self


class EducationalInfo(models.Model):
    """Modal to store educational details of user"""

    user = models.OneToOneField(
        ProjectUser, blank=True, null=True, default=None,
        on_delete=models.CASCADE, related_name='education')
    highest_education = models.CharField(
        max_length=100, null=True, blank=True, default='')
    institution = models.CharField(
        max_length=100, null=True, blank=True, default='')
    specialization = models.CharField(
        max_length=100, null=True, blank=True, default='')

    def __str__(self):
        return self.user.first_name


class ProfessionalInfo(models.Model):
    """Modal to store professional details of user"""

    user = models.OneToOneField(
        ProjectUser, blank=True, null=True, default=None,
        on_delete=models.CASCADE, related_name='profession')
    occupation = models.CharField(
        max_length=100, null=True, blank=True, default='')
    company = models.CharField(
        max_length=100, null=True, blank=True, default='')
    income = models.CharField(
        max_length=100, null=True, blank=True, default='')
    location = models.CharField(
        max_length=100, null=True, blank=True, default='')
    experience = models.CharField(
        max_length=100, null=True, blank=True, default='')

    def __str__(self):
        return self.user.first_name
#
#
#
