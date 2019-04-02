"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
The DB model for the users application

@author Daniel Schroeder
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
from django.db import models

class user(models.Model):
    
    ID = models.CharField(max_length=120, primary_key=True)
    userPass = models.CharField(max_length=120)
    year = models.IntegerField() 
    "1=freshman 2=sophomore etc"

    def __str__(self):
        return self.ID


