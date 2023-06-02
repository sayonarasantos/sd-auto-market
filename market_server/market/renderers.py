from datetime import datetime
from google.protobuf.timestamp_pb2 import Timestamp
from rest_framework import renderers
from . import user_pb2


class ProtoBufferRenderer(renderers.BaseRenderer):
    media_type = "application/x-google-protobuf"
    format = "protobuf"
    render_style = "binary"
    charset = None

    def render(self, data, accepted_media_type=None, renderer_context=None):
        user_message = user_pb2.SomeMessage()
        user_message.id = data["id"]
        user_message.username = data["username"]
        user_message.password = data["password"]
        
        # Convert string to datetime
        date_joined = datetime.strptime(data["date_joined"], "%Y-%m-%dT%H:%M:%S.%fZ")
        
        # Convert datetime to Timestamp
        timestamp = Timestamp()
        timestamp.FromDatetime(date_joined)
        user_message.date_joined.CopyFrom(timestamp)

        user_message.address_cep = data["address_cep"]
        user_message.address_state = data["address_state"]
        user_message.address_city = data["address_city"]
        user_message.address_neighborhood = data["address_neighborhood"]
        user_message.address_street = data["address_street"]
        user_message.address_number = data["address_number"]
        user_message.address_complement = data["address_complement"]

        return user_message.SerializeToString()
