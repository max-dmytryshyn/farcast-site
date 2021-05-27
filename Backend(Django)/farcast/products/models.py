from django.db import models


class Product(models.Model):
    name = models.CharField(max_length = 32)
    price = models.FloatField()

    class Meta:
        db_table = "products"
