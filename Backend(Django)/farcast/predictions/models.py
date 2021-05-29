from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

from products.models import Product


class SalePrediction(models.Model):
    day = models.DateField()
    hour = models.PositiveSmallIntegerField(MaxValueValidator(23))
    product = models.ForeignKey(Product, on_delete = models.CASCADE)
    amount = models.IntegerField(MinValueValidator(1))

    class Meta:
        db_table = "sale_predictions"
