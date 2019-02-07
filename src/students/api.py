"""
This files creates a CRUD (create, read, update, delete) approach to users
interaction with the backend.

Each class contains the logic for each model that exists in the database.
So you may define functions inside of these classes that will allow you to handle 
each type of data however you wish. 

@reference https://www.django-rest-framework.org/api-guide/viewsets/
@author Ron Rounsifer
@version 0.01
"""

from students.models import student, trophy, topic, problem
from rest_framework import viewsets, permissions
from .serializers import StudentSerializer, TrophySerializer, TopicSerializer, ProblemSerializer

# Trophy Viewset
class TrophyViewSet(viewsets.ModelViewSet):
  queryset = trophy.objects.all()
  permissions_classes = [permissions.AllowAny] # TODO modify permissions
  serializer_class = TrophySerializer 

# Student Viewset
class StudentViewSet(viewsets.ModelViewSet):
  queryset = student.objects.all()
  permissions_classes = [permissions.AllowAny] # TODO modify permissions
  serializer_class = StudentSerializer

# Topic Serializer
class TopicViewSet(viewsets.ModelViewSet):
  queryset = topic.objects.all()
  permissions_classes = [permissions.AllowAny] # TODO modify permissions
  serializer_class = TopicSerializer 

# Problem Serializer
class ProblemViewSet(viewsets.ModelViewSet):
  queryset = problem.objects.all()
  permissions_classes = [permissions.AllowAny] # TODO modify permissions
  serializer_class = ProblemSerializer

