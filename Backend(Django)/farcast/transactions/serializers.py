from rest_framework import serializers

from .models import Transaction
from products.serializers import ProductSerializer


class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = '__all__'

    def to_representation(self, instance):
        self.fields['product'] = ProductSerializer(read_only=True)
        return super(TransactionSerializer, self).to_representation(instance)
