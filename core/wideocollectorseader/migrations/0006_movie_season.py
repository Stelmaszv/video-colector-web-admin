# Generated by Django 3.1.3 on 2023-04-30 21:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wideocollectorseader', '0005_auto_20230416_1902'),
    ]

    operations = [
        migrations.AddField(
            model_name='movie',
            name='season',
            field=models.IntegerField(default=0),
        ),
    ]