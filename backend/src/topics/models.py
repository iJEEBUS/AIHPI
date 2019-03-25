"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
The DB model for the topic application

@author Daniel Schroeder
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
from django.db import models

class topic(models.Model):
    
    topicID = models.CharField(max_length=120,primary_key=True)
    
    def __str__(self):
        return self.topicID


