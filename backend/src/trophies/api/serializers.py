# converts from JSON to db model format
from rest_framework import serializers

from trophies.models import Trophy

class TrophySerializer(serializers.ModelSerializer):
    class Meta:
        model = Trophy
        fields = ('id', 'title', 'description', 'topic','content')