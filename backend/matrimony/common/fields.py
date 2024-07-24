# serializers.py
from rest_framework import serializers
from django.core.exceptions import ObjectDoesNotExist


class RelatedObjectField(serializers.Field):

    def __init__(self, model, *args, **kwargs):
        self.model = model
        super().__init__(*args, **kwargs)

    def to_representation(self, value):
        try:
            obj = self.model.objects.get(id=value.id)
            return {
                "id": obj.id,
                "name": getattr(obj, 'name', str(obj))
            }
        except ObjectDoesNotExist:
            return None

    def to_internal_value(self, value):
        try:
            obj = self.model.objects.get(id=value)
            return obj
        except ObjectDoesNotExist:
            raise serializers.ValidationError(
                f"{self.model.__name__} does not exist")
