# converts from JSON to db model format
from rest_framework import serializers

from problem_topics.models import problem_topic

class problem_topicSerializer(serializers.ModelSerializer):
    class Meta:
        model = problem_topic
        fields = ('problemID', 'topicID')
