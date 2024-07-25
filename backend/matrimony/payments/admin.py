from django.contrib import admin
from payments import models


# Register your models here.


class TransactionAdmin(admin.ModelAdmin):
    list_display = ('user', 'created_on', 'tier', 'is_active')


admin.site.register(models.Transaction, TransactionAdmin)
