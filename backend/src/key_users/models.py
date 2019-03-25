"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
The DB model for the user key collection

@author Daniel Schroeder
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
from django.db import models

class key_user(models.Model):
    
    
    userID = models.ForeignKey('users.user', on_delete=models.CASCADE)
    key = models.ForeignKey('keys.key', on_delete=models.CASCADE)
    

    def __str__(self):
        return self.title


