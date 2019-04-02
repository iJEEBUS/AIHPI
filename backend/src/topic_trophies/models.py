"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
The DB model for the user trophy collection

@author Daniel Schroeder
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
from django.db import models

class topic_trophy(models.Model):
    
    
    topicID = models.ForeignKey('topics.topic', on_delete=models.SET_NULL, blank=True, null=True)
    trophy = models.ForeignKey('trophies.trophy', on_delete=models.SET_NULL, blank=True, null=True)
    
    class Meta:
        unique_together = (("topicID", "trophy"),)

    def __str__(self):
        return self.title


