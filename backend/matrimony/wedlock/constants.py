import enum


class ChoiceAdaptor(enum.IntEnum):

    @classmethod
    def choices(cls):
        return ((item.value, item.name.replace("_", " ")) for item in cls)

    @classmethod
    def values(cls):
        return [item.values for item in cls]


class ComplexionChoices(ChoiceAdaptor):
    FAIR = 101
    MEDIUM = 102
    BROWN = 103
    BLACK = 104


class RequestStatus(ChoiceAdaptor):
    REQUESTED = 101
    PENDING = 102
    APPROVED = 103
    REJECTED = 104


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


class HoroscopeTypes(ChoiceAdaptor):
    """ gender type choices"""

    Aries = 101
    Taurus = 102
    Gemini = 103
    Cancer = 104
    Leo = 105
    Virgo = 106
    Libra = 107
    Scorpio = 108
    Sagittarius = 109
    Capricorn = 110
    Aquarius = 111
    Pisces = 112


class WeightRangeChoices(ChoiceAdaptor):
    """ gender type choices"""

    Forty_FortyFive = 101
    FortyFive_Fifty = 102
    Fifty_FiftyFive = 103
    FiftyFive_Sixty = 104
    Sixty_SixtyFive = 105
    SixtyFive_Seventy = 106
    Seventy_SeventyFive = 107
    SeventyFive_Eighty = 108
    Eighty_EightyFive = 109
    EightyFive_Ninty = 110


class HeightRangeChoices(ChoiceAdaptor):
    """ gender type choices"""

    Hundred_Forty_FortyFive = 101
    Hundred_FortyFive_Fifty = 102
    Hundred_Fifty_FiftyFive = 103
    Hundred_FiftyFive_Sixty = 104
    Hundred_Sixty_SixtyFive = 105
    Hundred_SixtyFive_Seventy = 106
    Hundred_Seventy_SeventyFive = 107
    Hundred_SeventyFive_Eighty = 108
    Hundred_Eighty_EightyFive = 109
    Hundred_EightyFive_Ninty = 110



