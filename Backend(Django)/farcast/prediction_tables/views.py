from django.shortcuts import render
from rest_framework import viewsets

from .models import ProductForPrediction
from .serializers import ProductForPredictionSerializer


class ProductForPredictionViewSet(viewsets.ModelViewSet):

    queryset = ProductForPrediction.objects.all()
    serializer_class = ProductForPredictionSerializer
