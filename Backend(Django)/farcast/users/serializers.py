from rest_framework import serializers

from .models import FarCastUser


class FarCastUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = FarCastUser
        fields = ('username', 'email', 'first_name', 'last_name',  'mobile_phone', 'password')

    def create(self, validated_data):
        user = FarCastUser.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

    def update(self, instance, validated_data):
        instance.first_name = validated_data['first_name']
        instance.last_name = validated_data['last_name']
        instance.email = validated_data['email']
        instance.mobile_phone = validated_data['mobile_phone']
        instance.set_password(validated_data['password'])
        instance.save()
        return instance

