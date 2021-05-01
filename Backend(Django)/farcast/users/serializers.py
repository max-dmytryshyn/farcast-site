from rest_framework import serializers

from .models import FarCastUser


class FarCastUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = FarCastUser
        fields = (
                    'username', 'email', 'first_name', 'last_name', 'display_name', 'date_of_birth', 'address1',
                    'address2', 'zip_code', 'city', 'mobile_phone', 'additional_information'
                 )
