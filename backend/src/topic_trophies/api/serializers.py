# converts from JSON to db model format
from rest_framework import serializers

from topic_trophies.models import topic_trophy

class topic_trophySerializer(serializers.ModelSerializer):
    class Meta:
        model = topic_trophy
        fields = ('topicID', 'trophy')
