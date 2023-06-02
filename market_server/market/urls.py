from django.urls import path
from market.views import UserListCreate, UserRetrieve, UserUpdateAPIView, UserDestroyAPIView, get_address_info


urlpatterns = [
    path('user', UserListCreate.as_view()),
    path('user_details/<int:pk>', UserRetrieve.as_view()),
    path('user_update/<int:pk>', UserUpdateAPIView.as_view()),
    path('user_delete/<int:pk>', UserDestroyAPIView.as_view()),
    path('get_base_address/<str:cep>/', get_address_info, name='get_address_info'),
]
