"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
The DB model for the user trophy collection

@author Daniel Schroeder
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
from django.db import models

class topic_trophy(models.Model):
    
    
    topicID = models.ForeignKey('topics.topic', on_delete=models.CASCADE)
    trophy = models.ForeignKey('trophies.trophy', on_delete=models.CASCADE)
    

    def __str__(self):
        return self.title


