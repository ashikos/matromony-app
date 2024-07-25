from django.db import models
from accounts.constants import TierTypes
import datetime


# Create your models here.


class Transaction(models.Model):
    """Models to store details of transactions paid by users"""
    user = models.ForeignKey(
        'accounts.ProjectUser', blank=True, null=True, default=None,
        on_delete=models.CASCADE, related_name='transactions')
    created_on = models.DateTimeField(auto_now_add=True)
    session_id = models.CharField(
        default='', max_length=1000, null=True, blank=True)
    tier = models.IntegerField(
        choices=TierTypes.choices(), default=TierTypes.FREE,
        null=True, blank=True)
    is_active = models.BooleanField(default=False)

    def check_transaction_status(self):
        """Function to check the validity of transaction token"""

        today = datetime.datetime.date.today()
        created_on = self.created_on.date()

        expires_in = today - created_on

        if expires_in > 28:
            self.is_active = False
        elif expires_in <= 28:
            self.is_active = True
            
        self.save()
        return self.is_active
