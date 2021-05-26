from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from django.utils import timezone


class ProductForPrediction(models.Model):
    name = models.CharField(max_length = 32)
    price = models.FloatField()

    class Meta:
        db_table = "prediction_tables_product_for_prediction"


class SalePrediction(models.Model):
    day = models.DateField()
    hour = models.PositiveSmallIntegerField(MaxValueValidator(23))
    product = models.ForeignKey(ProductForPrediction, on_delete = models.CASCADE)
    amount = models.IntegerField(MinValueValidator(1))

    class Meta:
        db_table = "prediction_tables_sale_prediction"
