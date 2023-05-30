import requests
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListCreateAPIView
from market.models import User, Address, ProfileUser, Vehicle
from market.serializers import UserSerializer, AddressSerializer, ProfileUserSerializer, VehicleSerializer


class UserListCreate(ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserRetrieveUpdateDestroy(RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class AddressListCreate(ListCreateAPIView):
    queryset = Address.objects.all()
    serializer_class = AddressSerializer

class AddressRetrieveUpdateDestroy(RetrieveUpdateDestroyAPIView):
    queryset = Address.objects.all()
    serializer_class = AddressSerializer

@api_view(['GET'])
def get_address_info(request, cep):
    response = requests.get(f"https://brasilapi.com.br/api/cep/v1/{cep}")

    if response.status_code == 200:
        data = response.json()
        address_info = {
            'state': data.get('state'),
            'city': data.get('city'),
            'neighborhood': data.get('neighborhood'),
            'street': data.get('street')
        }
        # return Response(address_info)
        serializer = AddressSerializer(address_info)
        return Response(serializer.data)
    else:
        return Response({'error': 'Failed to get base address informations'}, status=response.status_code)


class ProfileUserListCreate(ListCreateAPIView):
    queryset = ProfileUser.objects.all()
    serializer_class = ProfileUserSerializer

class ProfileUserRetrieveUpdateDestroy(RetrieveUpdateDestroyAPIView):
    queryset = ProfileUser.objects.all()
    serializer_class = ProfileUserSerializer


class VehicleListCreate(ListCreateAPIView):
    queryset = Vehicle.objects.all()
    serializer_class = VehicleSerializer

class VehicleRetrieveUpdateDestroy(RetrieveUpdateDestroyAPIView):
    queryset = Vehicle.objects.all()
    serializer_class = VehicleSerializer
