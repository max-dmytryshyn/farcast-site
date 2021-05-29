from django.core.exceptions import ValidationError
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response

from .models import SalePrediction
from .serializers import SalePredictionSerializer


class SalePredictionViewSet(viewsets.ModelViewSet):

    queryset = SalePrediction.objects.all()
    serializer_class = SalePredictionSerializer

    @action(methods=['get'], detail=False, url_path='date/(?P<date>\d{4}-\d{2}-\d{2})')
    def get_sale_predictions_by_date(self, request, date):
        try:
            predictions = self.queryset.filter(day = date)
        except ValidationError:
            return Response("Invalid date", status=status.HTTP_400_BAD_REQUEST)
        if predictions:
            data = SalePredictionSerializer(predictions, many=True).data
            return Response(data, status=status.HTTP_200_OK)
        else:
            return Response(f"There are no predictions for {date}", status=status.HTTP_404_NOT_FOUND)