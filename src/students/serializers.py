"""
This file maps the models that we defined in the model class into
tables in the relational database
"""

from rest_framework import serializers
from students.models import student, trophy, topic, problem

# Student Serializer
class StudentSerializer(serializers.ModelSerializer):
  class Meta:
    model = student
    fields = '__all__'

# Trophy Serializer
class TrophySerializer(serializers.ModelSerializer):
  class Meta:
    model = trophy
    fields = '__all__'

# Topic Serializer
class TopicSerializer(serializers.ModelSerializer):
  class Meta:
    model = topic
    fields = '__all__'

# Problem Serializer
class ProblemSerializer(serializers.ModelSerializer):
  class Meta:
    model = problem
    fields = '__all__'

