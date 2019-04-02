"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
The DB model for the user key collection

@author Daniel Schroeder
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
from django.db import models

class problem_topic(models.Model):
    
    
    problemID = models.ForeignKey('problems.problem', on_delete=models.SET_NULL, blank=True, null=True)
    topicID = models.ForeignKey('topics.topic', on_delete=models.SET_NULL, blank=True, null=True)
    
    class Meta:
        unique_together = (("problemID", "topicID"),)

    def __str__(self):
        return self.title


