from django.db import transaction

data_dict = []

@transaction.atomic()
def add_users(data_dict):
    from accounts import models as acc_models
    from wedlock import models as wd_models

    password = data_dict.pop('password')
    preference_dict = data_dict.pop('preference')
    client_dict = data_dict.pop('client')

    print(data_dict['email'])

    data_dict['username'] = data_dict['email']
    user = acc_models.ProjectUser(**data_dict)
    user.set_password(password)
    user.save()

    client_dict['user'] = user

    caste_id = client_dict['caste']
    caste = wd_models.Caste.objects.get(id=caste_id)
    client_dict['caste'] = caste

    client = wd_models.Client.objects.create(**client_dict)

    preference_dict['user'] = client
    caste_id = preference_dict['caste']
    caste = wd_models.Caste.objects.get(id=caste_id)
    preference_dict['caste'] = caste

    preference = wd_models.Preferences.objects.create(**preference_dict)



for dict in data_dict:
    add_users(dict)