from rest_framework import serializers
from students.models import student

# Student Serializer
class StudentSerializer(serializers.ModelSerializer):
  class Meta:
    model = student
    fields = '__all__'
