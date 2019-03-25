"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
The DB model for the problems application

@author Ron Rounsifer
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
from django.db import models

class Problem(models.Model):
    
    # problem information
    title = models.CharField(max_length=120,primary_key=True)
    description = models.CharField(max_length=120)
    topic = models.ForeignKey('topics.topic', on_delete=models.CASCADE)
    solution = models.CharField(max_length=500)
    difficulty = models.IntegerField()
    "1=Freshman, 2=Sophomore ...etc"
    year = models.IntegerField()

    def __str__(self):
        return self.title
