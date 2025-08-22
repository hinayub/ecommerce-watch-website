from rest_framework import serializers
from .models import ProductColor, Product


class ProductColorSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductColor
        fields = "__all__"


class ProductSerializer(serializers.ModelSerializer):
    colors = ProductColorSerializer(many=True)

    class Meta:
        model = Product
        fields = ["id", "name", "description", "price", "stock", "colors"]
