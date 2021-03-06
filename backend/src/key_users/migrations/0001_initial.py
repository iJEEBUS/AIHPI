# Generated by Django 2.1.7 on 2019-04-02 04:35

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('users', '0001_initial'),
        ('keys', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='key_user',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('key', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='keys.key')),
                ('userID', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='users.user')),
            ],
        ),
        migrations.AlterUniqueTogether(
            name='key_user',
            unique_together={('userID', 'key')},
        ),
    ]
