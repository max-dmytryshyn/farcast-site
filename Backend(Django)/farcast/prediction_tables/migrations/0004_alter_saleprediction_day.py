# Generated by Django 3.2 on 2021-05-24 13:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('prediction_tables', '0003_saleprediction_day'),
    ]

    operations = [
        migrations.AlterField(
            model_name='saleprediction',
            name='day',
            field=models.DateField(),
        ),
    ]
