from django.utils import timezone

from django.db import models
# from accounts import models as acc_models
from wedlock import constants as wed_constants
from accounts import constants as acc_constants


# Create your models here.

class Religion(models.Model):
    name = models.CharField(
        max_length=100, null=True, blank=True, default='')

    def __str__(self):
        return self.name


class Caste(models.Model):
    religion = models.ForeignKey(
        Religion, blank=True, null=True, default=None,
        on_delete=models.CASCADE, related_name='caste')
    name = models.CharField(
        max_length=100, null=True, blank=True, default='')

    def __str__(self):
        return self.name


class SubCaste(models.Model):
    caste = models.ForeignKey(
        Caste, blank=True, null=True, default=None,
        on_delete=models.CASCADE, related_name='sub_caste')
    name = models.CharField(
        max_length=100, null=True, blank=True, default='')

    def __str__(self):
        return self.name


class Client(models.Model):
    user = models.OneToOneField(
        'accounts.ProjectUser', blank=True, null=True, default=None,
        on_delete=models.CASCADE, related_name='client')
    height = models.DecimalField(
        null=True, blank=True, max_digits=300, decimal_places=2, )
    weight = models.DecimalField(
        null=True, blank=True, max_digits=300, decimal_places=2, )
    caste = models.ForeignKey(
        Caste, blank=True, null=True, default=None,
        on_delete=models.CASCADE, related_name='client')
    horoscope = models.IntegerField(
        choices=wed_constants.HoroscopeTypes.choices(), null=True, blank=True)
    body_type = models.IntegerField(
        choices=wed_constants.BodyTypeChoices.choices(), null=True, blank=True)
    complexion = models.IntegerField(
        choices=wed_constants.ComplexionChoices.choices(), null=True,
        blank=True)
    blood_group = models.CharField(
        max_length=100, null=True, blank=True, default='')
    dietary = models.IntegerField(
        null=True, blank=True, choices=wed_constants.DietaryChoices.choices())


    def __str__(self):
        return f"client - {self.user.first_name} - {self.id}"


class FamilyInfo(models.Model):
    """model to store family details"""

    user = models.OneToOneField(
        Client, blank=True, null=True, default=None,
        on_delete=models.CASCADE, related_name='family')
    family_type = models.CharField(
        max_length=100, null=True, blank=True, default='')
    father_name = models.CharField(
        max_length=100, null=True, blank=True, default='')
    father_occupation = models.CharField(
        max_length=100, null=True, blank=True, default='')
    mother_name = models.CharField(
        max_length=100, null=True, blank=True, default='')
    mother_occupation = models.CharField(
        max_length=100, null=True, blank=True, default='')
    no_of_siblings = models.CharField(
        max_length=100, null=True, blank=True, default='')
    family_values = models.CharField(
        max_length=100, null=True, blank=True, default='')

    def __str__(self):
        return self.user.user.first_name


class Preferences(models.Model):
    """models to preferences of user"""

    user = models.OneToOneField(
        Client, blank=True, null=True, default=None,
        on_delete=models.CASCADE, related_name='preference')
    height_range = models.IntegerField(
        choices=wed_constants.HeightRangeChoices.choices(), null=True,
        blank=True)
    weight_range = models.IntegerField(
        choices=wed_constants.WeightRangeChoices.choices(), null=True,
        blank=True)
    caste = models.ForeignKey(
        Caste, blank=True, null=True, default=None,
        on_delete=models.CASCADE, related_name='preference')
    location = models.IntegerField(
        null=True, blank=True, choices=acc_constants.DistrictChoices.choices())
    family_type = models.CharField(
        max_length=100, null=True, blank=True, default='')
    expectations = models.TextField(default='')

    def __str__(self):
        return self.user.user.first_name


class UserLike(models.Model):
    """Modal to store users liked profiles"""

    owner = models.ForeignKey(
        Client, blank=True, null=True, default=None,
        on_delete=models.CASCADE, related_name='liked')
    receiver = models.OneToOneField(
        Client, blank=True, null=True, default=None,
        on_delete=models.CASCADE, related_name='likes')
    liked_on = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.owner.user.first_name} - {self.id}"


class UserInterest(models.Model):
    """Modal to store users interested  profiles"""

    owner = models.ForeignKey(
        Client, blank=True, null=True, default=None,
        on_delete=models.CASCADE, related_name='interested')
    receiver = models.ForeignKey(
        Client, blank=True, null=True, default=None,
        on_delete=models.CASCADE, related_name='interest')
    requested = models.BooleanField(default=True)
    requested_on = models.DateTimeField(default=timezone.now)
    is_approved = models.IntegerField(
        null=True, blank=True, choices=wed_constants.RequestStatus.choices(),
        default=wed_constants.RequestStatus.REQUESTED)

    def __str__(self):
        return f"{self.owner.user.first_name} - {self.id}"


class Chat(models.Model):
    """Modal to store users interested  profiles"""

    id = models.BigAutoField(primary_key=True)
    sender = models.ForeignKey(
        Client, blank=True, null=True, default=None,
        on_delete=models.CASCADE, related_name='se_chat')
    receiver = models.ForeignKey(
        Client, blank=True, null=True, default=None,
        on_delete=models.CASCADE, related_name='re_chat')
    sent_on = models.DateTimeField(auto_now_add=True)
    message = models.TextField()

    def __str__(self):
        return f"{self.sender.user.first_name} - {self.id}"
