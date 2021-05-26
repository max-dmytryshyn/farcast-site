from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response

from .models import ProductForPrediction, SalePrediction
from .serializers import ProductForPredictionSerializer, SalePredictionSerializer


class ProductForPredictionViewSet(viewsets.ModelViewSet):

    queryset = ProductForPrediction.objects.all()
    serializer_class = ProductForPredictionSerializer


class SalePredictionViewSet(viewsets.ModelViewSet):

    queryset = SalePrediction.objects.all()
    serializer_class = SalePredictionSerializer

    @action(methods=['get'], detail=False, url_path='date/(?P<date>\d{4}-\d{2}-\d{2})')
    def get_sale_predictions_by_date(self, request, date):
        predictions = self.queryset.filter(day = date)
        if predictions:
            data = SalePredictionSerializer(predictions, many=True).data
            return Response(data, status=status.HTTP_200_OK)
        else:
            return Response("There are no predictions for this day", status=status.HTTP_404_NOT_FOUND)