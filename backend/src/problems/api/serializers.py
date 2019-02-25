# converts from JSON to db model format
from rest_framework import serializers

from problems.models import Problem

class ProblemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Problem
        fields = ('id', 'title', 'description', 'topic','solution')