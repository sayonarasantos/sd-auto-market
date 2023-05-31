from rest_framework import serializers
from market.models import CustomUser, Vehicle


# class AddressSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Address
#         fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'password', 'date_joined', 'adress_state',
                  'adress_city', 'adress_neighborhood', 'adress_street',
                  'address_number', 'address_complement']


class VehicleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vehicle
        fields = '__all__'
