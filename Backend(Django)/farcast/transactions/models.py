from django.db import models
from django.core.validators import MinValueValidator

from products.models import Product


class Transaction(models.Model):
    date = models.DateField()
    time = models.TimeField()
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    amount = models.IntegerField(MinValueValidator(1))

    class Meta:
        db_table = "transactions"
