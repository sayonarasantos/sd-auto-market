from django.urls import path
from market.views import UserListCreate, UserRetrieveUpdateDestroy, VehicleListCreate, VehicleRetrieveUpdateDestroy, get_address_info


urlpatterns = [
    path('user', UserListCreate.as_view()),
    path('user_config/<str:id>', UserRetrieveUpdateDestroy.as_view()),
    # path('base_address', AddressListCreate.as_view()),
    # path('base_address_config/<str:id>', AddressRetrieveUpdateDestroy.as_view()),
    path('get_base_address/<str:cep>/', get_address_info, name='get_address_info'),
    path('vehicle', VehicleListCreate.as_view()),
    path('vehicle_config/<str:id>', VehicleRetrieveUpdateDestroy.as_view()),
]
