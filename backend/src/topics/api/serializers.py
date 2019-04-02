# converts from JSON to db model format
from rest_framework import serializers

from topics.models import topic

class topicSerializer(serializers.ModelSerializer):
    class Meta:
        model = topic
        fields = ('topicID')
