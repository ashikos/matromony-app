# Generated by Django 4.2.13 on 2024-07-06 20:31

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('wedlock', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='familyinfo',
            name='user',
            field=models.OneToOneField(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='family', to='wedlock.client'),
        ),
        migrations.AlterField(
            model_name='preferences',
            name='user',
            field=models.OneToOneField(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='preference', to='wedlock.client'),
        ),
    ]
