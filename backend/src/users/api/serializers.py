# converts from JSON to db model format
from rest_framework import serializers

from users.models import user

class userSerializer(serializers.ModelSerializer):
    class Meta:
        model = user
        fields = ('ID', 'userPass', 'year')
