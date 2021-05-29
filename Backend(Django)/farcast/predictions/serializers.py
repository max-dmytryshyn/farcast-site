from rest_framework import serializers

from .models import SalePrediction


class SalePredictionSerializer(serializers.ModelSerializer):
    class Meta:
        model = SalePrediction
        fields = '__all__'
        depth = 1

