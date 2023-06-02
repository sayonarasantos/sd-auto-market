from rest_framework import serializers
from market.models import CustomUser


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'password', 'date_joined', 'address_cep', 'address_state',
                  'address_city', 'address_neighborhood', 'address_street',
                  'address_number', 'address_complement']
