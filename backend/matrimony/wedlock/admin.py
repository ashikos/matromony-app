from django.contrib import admin
from wedlock import models


# Register your models here.


class UserAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'email', 'gender')
    

class InterestAdmin(admin.ModelAdmin):
    list_display = ('owner', 'receiver', 'requested', 'is_approved')


class ChatAdmin(admin.ModelAdmin):
    list_display = ('sender', 'receiver', 'message')


admin.site.register(models.FamilyInfo)
admin.site.register(models.Client)
admin.site.register(models.Preferences)
admin.site.register(models.Religion)
admin.site.register(models.Caste)
admin.site.register(models.SubCaste)
admin.site.register(models.UserInterest, InterestAdmin)
admin.site.register(models.UserLike)
admin.site.register(models.Chat, ChatAdmin)
