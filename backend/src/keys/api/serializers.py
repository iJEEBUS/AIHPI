# converts from JSON to db model format
from rest_framework import serializers

from key_users.models import key_user

class key_userSerializer(serializers.ModelSerializer):
    class Meta:
        model = key_user
        fields = ('keyCode', 'expDate')
