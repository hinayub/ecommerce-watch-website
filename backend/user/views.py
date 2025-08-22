from django.shortcuts import render
from rest_framework.generics import CreateAPIView
from django.contrib.auth.models import User
from .serializer import SignupSerializer

# Create your views here.


class SignupUser(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = SignupSerializer
