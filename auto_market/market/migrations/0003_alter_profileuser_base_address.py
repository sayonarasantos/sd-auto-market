# Generated by Django 4.2.1 on 2023-05-29 15:49

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('market', '0002_alter_profileuser_base_address'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profileuser',
            name='base_address',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='profiles', to='market.address'),
        ),
    ]
