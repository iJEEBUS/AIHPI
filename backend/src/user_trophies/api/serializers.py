# converts from JSON to db model format
from rest_framework import serializers

from user_trophies.models import user_trophy

class user_trophySerializer(serializers.ModelSerializer):
    class Meta:
        model = user_trophy
        fields = ('userID', 'trophy')
