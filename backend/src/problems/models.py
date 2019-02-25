"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
The DB model for the problems application

@author Ron Rounsifer
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
from django.db import models

class Problem(models.Model):
    
    # problem information
    title = models.CharField(max_length=120)
    description = models.CharField(max_length=120)
    topic = models.CharField(max_length=100)
    solution = models.CharField(max_length=500)

    def __str__(self):
        return self.title