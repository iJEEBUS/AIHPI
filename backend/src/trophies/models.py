"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
The DB model for the trophy application

@author Ron Rounsifer
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
from django.db import models

class Trophy(models.Model):
    
    # trophy information
    title = models.CharField(max_length=120)
    description = models.CharField(max_length=120)
    topic = models.CharField(max_length=100)
    content = models.CharField(max_length=500)

    def __str__(self):
        return self.title

'''
class Student(models.Model):
    # primary key
    userID = models.AutoField(primary_key=True)
    # login credentials
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=50) # TODO need to make this private
    # information
    first_name = models.CharField(max_length=120)
    last_name = models.CharField(max_length=120)
    user_name = models.CharField(max_length=120)
    email = models.EmailField(max_length=120)

    def __str__(self):
        return self.username
'''