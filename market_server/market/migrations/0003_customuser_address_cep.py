# Generated by Django 4.2.1 on 2023-06-01 18:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('market', '0002_rename_adress_city_customuser_address_city_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='address_cep',
            field=models.PositiveIntegerField(blank=True, default=60190000),
            preserve_default=False,
        ),
    ]
