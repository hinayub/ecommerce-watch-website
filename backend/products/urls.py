from django.urls import path
from .views import ProductInfo

urlpatterns = [path("productdata/", ProductInfo.as_view(), name="prductData")]
