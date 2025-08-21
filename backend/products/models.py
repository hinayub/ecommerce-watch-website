from django.db import models


# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(blank=True, null=True)
    price = models.PositiveIntegerField(default=0)
    stock = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.name


class ProductColor(models.Model):
    product = models.ForeignKey(
        Product, related_name="colors", on_delete=models.CASCADE
    )
    color_name = models.CharField(max_length=50)
    hex_code = models.CharField(max_length=7, blank=True)
    image = models.ImageField(upload_to="product_images/")

    def __str__(self):
        return f"Image for {self.product.name}{self.color_name}"
