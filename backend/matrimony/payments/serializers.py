from rest_framework import serializers
from payments import models as pay_models


class PaymentSerializer(serializers.ModelSerializer):
    """serializer for transactions"""

    class Meta:
        model = pay_models.Transaction
        fields = '__all__'

