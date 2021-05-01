from django.shortcuts import render

from rest_framework import viewsets

from .serializers import FarCastUserSerializer
from .models import FarCastUser
from rest_framework.permissions import IsAuthenticated


class FarCastUserSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)

    queryset = FarCastUser.objects.all()
    serializer_class = FarCastUserSerializer
