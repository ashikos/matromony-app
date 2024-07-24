
def get_advanced_userInfo(user):

    if user.user_type == 101:
        return {}
    client = user.client if user.client else None
    data = {
        "education": user.education.id if user.education else None,
        "profession": user.profession.id if user.profession else None,
        "family": client.family.id if client.family else None,
        "client": user.client.id if user.client else None,
        "preference": client.preference.id if client.preference else None,
    }
    return data
