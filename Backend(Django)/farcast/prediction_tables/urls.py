from django.urls import include, path
from rest_framework import routers
from . import views


router = routers.DefaultRouter()
router.register(r'products', views.ProductForPredictionViewSet)
router.register(r'predictions', views.SalePredictionViewSet)

urlpatterns = [
    path('', include(router.urls)),
    ]
