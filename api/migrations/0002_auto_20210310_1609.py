# Generated by Django 3.0.5 on 2021-03-10 07:09

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='indsLclsCd19',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=20)),
                ('d_cnt', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=20), size=None)),
                ('f_cnt', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=20), size=None)),
                ('l_cnt', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=20), size=None)),
                ('n_cnt', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=20), size=None)),
                ('o_cnt', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=20), size=None)),
                ('p_cnt', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=20), size=None)),
                ('q_cnt', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=20), size=None)),
                ('r_cnt', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=20), size=None)),
                ('s_cnt', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=20), size=None)),
            ],
        ),
        migrations.DeleteModel(
            name='indsLclsCd',
        ),
    ]
