# Generated by Django 3.1.3 on 2022-01-04 14:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wideocollectorseader', '0004_auto_20220104_1440'),
    ]

    operations = [
        migrations.AddField(
            model_name='producents',
            name='year',
            field=models.DateTimeField(null=True),
        ),
        migrations.AlterField(
            model_name='producents',
            name='avatar',
            field=models.CharField(default='', max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='producents',
            name='country',
            field=models.CharField(default='', max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='producents',
            name='description',
            field=models.TextField(default='', null=True),
        ),
        migrations.AlterField(
            model_name='producents',
            name='dir',
            field=models.CharField(default='', max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='producents',
            name='show_name',
            field=models.CharField(default='', max_length=200, null=True),
        ),
    ]
