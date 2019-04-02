from rest_framework.generics import ListAPIView, RetrieveAPIView

from key_users.models import key_user
from .serializers import key_userSerializer

class key_userListView(ListAPIView):
    queryset = key_user.objects.all()
    serializer_class = key_userSerializer

class key_userDetailView(RetrieveAPIView):
    queryset = key_user.objects.all()
    serializer_class = key_userSerializer
