"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
The DB model for the user trophy collection

@author Daniel Schroeder
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
from django.db import models

class user_trophy(models.Model):
    
    
    userID = models.ForeignKey('users.user', on_delete=models.SET_NULL, blank=True, null=True)
    trophy = models.ForeignKey('trophies.trophy', on_delete=models.SET_NULL, blank=True, null=True)
    
    class Meta:
        unique_together = ("userID", "trophy")

    def __str__(self):
        return self.title


