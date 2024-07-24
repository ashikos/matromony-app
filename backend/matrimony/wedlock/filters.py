from django_filters import rest_framework as filters
from django.db.models import Q

from wedlock import models as wed_models


class CasteFilter(filters.FilterSet):
    """Filtering Order list by Vendor."""
    religion = filters.CharFilter(method='religion_filter')

    class Meta:
        """Meta info"""
        model = wed_models.Caste
        fields = "__all__"

    def religion_filter(self, queryset, name, value):
        """Method to filter order withrespect to vendor id."""
        query = Q(religion__id=value)
        return queryset.filter(query)


class ChatFilter(filters.FilterSet):
    """Filtering Order list by Vendor."""
    user = filters.CharFilter(method='itter_filter')
    friend = filters.CharFilter(method='itter_filter')

    class Meta:
        """Meta info"""
        model = wed_models.Chat
        fields = "__all__"

    def itter_filter(self, queryset, name, value):
        """Method to filter order withrespect to vendor id."""
        params = self.request.query_params
        user_id = params.get('user', None)
        friend_id = params.get('friend', None)
        queryset_1 = queryset.filter(
            sender__id=user_id, receiver__id=friend_id)
        queryset_2 = queryset.filter(
            sender__id=friend_id, receiver__id=user_id)
        queryset = queryset_1 | queryset_2
        return queryset.order_by("id")
    #
    # def friend_filter(self, queryset, name, value):
    #     """Method to filter order withrespect to vendor id."""
    #     query = Q(religion__id=value)
    #     return queryset.filter(query)