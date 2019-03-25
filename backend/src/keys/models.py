"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
The DB model for the key application

@author Daniel Schroeder
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
from django.db import models

class key(models.Model):
    
    keyCode = models.CharField(max_length=120, primary_key=True)
    expDate = models.DateField()
    
    def __str__(self):
        return self.keyCode


