from django.db import models
from django.core.validators import MaxValueValidator


class ProductForPrediction(models.Model):
    name = models.CharField(max_length = 32)
    price = models.FloatField()

    class Meta:
        db_table = "prediction_tables_product_for_prediction"


class SalePrediction(models.Model):
    product = models.ForeignKey(ProductForPrediction, on_delete = models.CASCADE)
    hour = models.PositiveSmallIntegerField(MaxValueValidator(23))
    amount = models.IntegerField()

    class Meta:
        db_table = "prediction_tables_sale_prediction"
