"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
The DB model for the user trophy collection

@author Daniel Schroeder
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
from django.db import models

class user_trophy(models.Model):
    
    
    userID = models.ForeignKey('users.user', on_delete=models.CASCADE)
    trophy = models.ForeignKey('trophies.trophy', on_delete=models.CASCADE)
    

    def __str__(self):
        return self.title


