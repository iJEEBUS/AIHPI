"""
This file contains all of the declarations of the models that will
be mapped into a relational database. 

Current models include:
  - student
  - trophy
  - topic
  - problem

@author Ron Rounsifer
@version 0.01
"""
from django.db import models



# TODO must still modify the field of the attributes. The ones in place 
# are currently there as placeholders.

class student(models.Model):
  user_name = models.CharField(max_length=100)
  password = models.CharField(max_length=100) # TODO must make this a secure password
  access_key = models.CharField(max_length=100, unique=True)
  created_at = models.DateTimeField(auto_now_add=True) # to keep track of account age

class trophy(models.Model):
  topic = models.CharField(max_length=100)
  description = models.CharField(max_length=100)
  trophy_title = models.CharField(max_length=100)
  unlocked_at = models.DateTimeField(auto_now_add=True) # so they can see when they unlocked trophies

class topic(models.Model):
  description = models.CharField(max_length=100)
  difficulty = models.CharField(max_length=100)
  year_level = models.CharField(max_length=100)

# I think we will have to change this to something like
# the case method below.
# We need to store all of the data of each patients case in this
# as it is labeled in the report
class problem(models.Model):
  case_id = models.CharField(max_length=100)
  case = models.CharField(max_length=100) # what exactly is a case attribute?
  solution = models.CharField(max_length=100)



### IGNORE FOR NOW
class case(models.Model):
  # there will be much more data per case. 
  # these are just placeholders for now
  d1 = models.CharField(max_length=100)
  d2 = models.CharField(max_length=100)  
  d3 = models.CharField(max_length=100)
  d4 = models.CharField(max_length=100)
  d5 = models.CharField(max_length=100)
