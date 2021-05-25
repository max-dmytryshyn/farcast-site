from rest_framework import serializers

from .models import ProductForPrediction


class ProductForPredictionSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductForPrediction
        fields = '__all__'
