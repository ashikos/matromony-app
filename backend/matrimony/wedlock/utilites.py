from django.db.models import Q
from accounts import models as acc_models
from wedlock import models as wd_models


def get_preferred_queryset(user, query_set):
    """function to get preferred query set"""

    print('gender', user.gender)
    query_set = query_set.exclude(gender=user.gender)

    query_data = {

    }

    return query_set
