from rest_framework import serializers

from .models import ProductForPrediction, SalePrediction


class ProductForPredictionSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductForPrediction
        fields = '__all__'


class SalePredictionSerializer(serializers.ModelSerializer):
    class Meta:
        model = SalePrediction
        fields = '__all__'
