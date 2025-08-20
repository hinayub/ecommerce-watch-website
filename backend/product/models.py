from django.db import models


# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(blank=True, null=True)
    price = models.PositiveIntegerField(default=0)
    stock = models.PositiveIntegerField(default=0)


class ProductColor(models.Model):
    product = models.ForeignKey(
        Product, related_name="colors", on_delete=models.CASCADE
    )
    color_name = models.CharField(max_length=50)


class ProductImage(models.Model):
    product = models.ForeignKey(
        Product, related_name="images", on_delete=models.CASCADE
    )
    image = models.ImageField(upload_to="product_images/")
