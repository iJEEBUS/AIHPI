from students.models import student
from rest_framework import viewsets, permissions
from .serializers import StudentSerializer

# Lead Viewset
class StudentViewSet(viewsets.ModelViewSet):
  queryset = student.objects.all()
  permissions_classes = [
    permissions.AllowAny
  ]

  serializer_class = StudentSerializer 
