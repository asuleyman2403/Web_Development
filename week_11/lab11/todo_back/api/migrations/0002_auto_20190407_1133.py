# Generated by Django 2.2 on 2019-04-07 11:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='task',
            name='created_at',
        ),
        migrations.RemoveField(
            model_name='task',
            name='due_on',
        ),
    ]