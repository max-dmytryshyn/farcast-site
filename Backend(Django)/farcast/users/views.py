from django.shortcuts import get_object_or_404

from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response

from .serializers import FarCastUserSerializer
from .models import FarCastUser
from rest_framework.permissions import IsAuthenticated


class FarCastUserViewSet(viewsets.ModelViewSet):
    # permission_classes = (IsAuthenticated,)

    queryset = FarCastUser.objects.all()
    serializer_class = FarCastUserSerializer

    @action(methods=['get'], detail=False, url_path='username/(?P<username>\w+)')
    def get_user_by_username(self, request, username):
        user = get_object_or_404(FarCastUser, username=username)
        data = FarCastUserSerializer(user).data
        return Response(data, status=status.HTTP_200_OK)

