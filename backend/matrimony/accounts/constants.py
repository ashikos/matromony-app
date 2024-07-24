import enum


class ChoiceAdaptor(enum.IntEnum):

    @classmethod
    def choices(cls):
        return ((item.value, item.name.replace("_", " ")) for item in cls)

    @classmethod
    def values(cls):
        return [item.values for item in cls]


class GenderTypes(ChoiceAdaptor):
    """ gender type choices"""

    Male = 101
    Female = 102
    Others = 103


class UserTypes(ChoiceAdaptor):
    """ gender type choices"""

    Admin = 101
    User = 102


class TierTypes(ChoiceAdaptor):
    """ gender type choices"""

    FREE = 101
    GOLD = 102
    DIAMOND = 103


class SmokeChoices(ChoiceAdaptor):
    YES = 101
    NO = 102
    BEGINNER = 103
    CHAIN_SMOKER = 104
    OCCASIONALLY = 105


class DrinkingChoices(ChoiceAdaptor):
    YES = 101
    NO = 102
    SOCIAL_DRINKER = 103
    HEAVY_DRINKER = 104
    OCCASIONALLY = 105


class ComplexionChoices(ChoiceAdaptor):
    FAIR = 101
    MEDIUM = 102
    BROWN = 103
    BLACK = 104


class BodyTypeChoices(ChoiceAdaptor):
    SLIM = 101
    ATHLETIC = 102
    AVERAGE = 103
    MUSCULAR = 104
    CURVY = 105
    PLUS_SIZE = 106
    PETITE = 107
    TALL = 108


class DietaryChoices(ChoiceAdaptor):
    OMNIVORE = 101
    VEGETARIAN = 102
    VEGAN = 103
    PESCATARIAN = 104
    FLEXTARIAN = 105
    KETO = 106
    GLUTEN_FREE = 107
    DAIRY_FREE = 108


class DistrictChoices(ChoiceAdaptor):
    ALAPPUZHA = 101
    ERNAKULAM = 102
    IDUKKI = 103
    KANNUR = 104
    KASARAGOD = 105
    KoLLAM = 106
    KOTTAYAM = 107
    KOZHIKODE = 108
    MALAPPURAM = 109
    PALAKKADd = 110
    PATHANAMTHITTA = 111
    THIRUVANANTHAPURAM = 112
    THRISSUR = 113
    WAYANA = 114
