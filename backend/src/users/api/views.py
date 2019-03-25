from rest_framework.generics import ListAPIView, RetrieveAPIView

from users.models import user
from .serializers import userSerializer

class userListView(ListAPIView):
    queryset = user.objects.all()
    serializer_class = userSerializer

class userDetailView(RetrieveAPIView):
    queryset = user.objects.all()
    serializer_class = userSerializer
