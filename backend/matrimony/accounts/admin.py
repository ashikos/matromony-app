from django.contrib import admin
from accounts import models


# Register your models here.


class UserAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'email', 'is_employ')


admin.site.register(models.ProjectUser, UserAdmin)
admin.site.register(models.EducationalInfo)
admin.site.register(models.ProfessionalInfo)
# admin.site.register(models.FamilyInfo)
# admin.site.register(models.LifeStyle)
# admin.site.register(models.Preferences)
