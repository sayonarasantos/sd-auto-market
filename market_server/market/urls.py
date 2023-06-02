from django.urls import path
from market.views import UserListCreate, UserRetrieve, UserRetrieveUpdateDestroy, VehicleListCreate, VehicleRetrieveUpdateDestroy, get_address_info


urlpatterns = [
    path('user', UserListCreate.as_view()),
    path('user_details/<int:pk>', UserRetrieve.as_view()),
    path('user_config/<int:pk>', UserRetrieveUpdateDestroy.as_view(), name='user-detail'),
    # path('base_address', AddressListCreate.as_view()),
    # path('base_address_config/<str:id>', AddressRetrieveUpdateDestroy.as_view()),
    path('get_base_address/<str:cep>/', get_address_info, name='get_address_info'),
    path('vehicle', VehicleListCreate.as_view()),
    path('vehicle_config/<int:pk>', VehicleRetrieveUpdateDestroy.as_view()),
]
