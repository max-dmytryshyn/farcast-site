from rest_framework import serializers

from .models import FarCastUser


class FarCastUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = FarCastUser
        fields = ('username', 'email', 'first_name', 'last_name',  'mobile_phone', 'password')
        