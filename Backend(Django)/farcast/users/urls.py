from django.urls import include, path
from rest_framework import routers
from . import views
from rest_framework_simplejwt import views as jwt_views

router = routers.DefaultRouter()
router.register(r'users', views.FarCastUserViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
]