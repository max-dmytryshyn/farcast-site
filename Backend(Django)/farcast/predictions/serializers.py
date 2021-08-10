from rest_framework import serializers

from .models import SalePrediction
from products.serializers import ProductSerializer


class SalePredictionSerializer(serializers.ModelSerializer):
    class Meta:
        model = SalePrediction
        fields = '__all__'

    def to_representation(self, instance):
        self.fields['product'] = ProductSerializer(read_only=True)
        return super(SalePredictionSerializer, self).to_representation(instance)
