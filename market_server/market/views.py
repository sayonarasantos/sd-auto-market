import requests
from rest_framework.filters import SearchFilter
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.generics import ListCreateAPIView, RetrieveAPIView, UpdateAPIView, DestroyAPIView
from rest_framework.renderers import JSONRenderer
from rest_framework_xml.renderers import XMLRenderer
from market.models import CustomUser
from market.serializers import UserSerializer
from .renderers import ProtoBufferRenderer


@api_view(['GET'])
def get_address_info(request, cep):
    response = requests.get(f"https://brasilapi.com.br/api/cep/v1/{cep}")

    if response.status_code == 200:
        data = response.json()
        address_info = {
            'address_state': data.get('state'),
            'address_city': data.get('city'),
            'address_neighborhood': data.get('neighborhood'),
            'address_street': data.get('street')
        }
        return Response(address_info)
        # serializer = AddressSerializer(address_info)
        # return Response(serializer.data)
    else:
        return Response({'error': 'Failed to get base address informations'}, status=response.status_code)


class UserListCreate(ListCreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter]
    filterset_fields = ['address_state', 'address_city']
    search_fields = ['username', 'address_street']

class UserRetrieve(RetrieveAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer
    renderer_classes = [JSONRenderer, XMLRenderer, ProtoBufferRenderer]

class UserUpdateAPIView(UpdateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer

class UserDestroyAPIView(DestroyAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer
