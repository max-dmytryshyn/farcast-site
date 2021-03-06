from rest_framework import serializers

from .models import FarCastUser


class FarCastUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = FarCastUser
        fields = ('username', 'email', 'first_name', 'last_name', 'password', 'id', 'mobile_phone', 'address')

    def create(self, validated_data):
        user = FarCastUser.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            mobile_phone = validated_data['mobile_phone'],
            address = validated_data['address']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

    def update(self, instance, validated_data):
        instance.first_name = validated_data.get('first_name', instance.first_name)
        instance.last_name = validated_data.get('last_name', instance.last_name)
        instance.email = validated_data.get('email', instance.email)
        instance.mobile_phone = validated_data.get('mobile_phone', instance.mobile_phone)
        instance.address = validated_data.get('address', instance.address)
        instance.set_password(validated_data.get('password', instance.password))
        instance.save()
        return instance




