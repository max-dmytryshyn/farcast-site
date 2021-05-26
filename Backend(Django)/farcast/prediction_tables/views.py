from django.shortcuts import render
from rest_framework import viewsets

from .models import ProductForPrediction, SalePrediction
from .serializers import ProductForPredictionSerializer, SalePredictionSerializer


class ProductForPredictionViewSet(viewsets.ModelViewSet):

    queryset = ProductForPrediction.objects.all()
    serializer_class = ProductForPredictionSerializer


class SalePredictionViewSet(viewsets.ModelViewSet):

    queryset = SalePrediction.objects.all()
    serializer_class = SalePredictionSerializer

