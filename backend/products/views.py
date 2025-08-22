from django.shortcuts import render
from rest_framework.generics import ListAPIView
from .models import Product
from .serializer import ProductSerializer


# Create your views here.
class ProductInfo(ListAPIView):
    queryset = Product.objects.prefetch_related("colors").all()
    serializer_class = ProductSerializer
