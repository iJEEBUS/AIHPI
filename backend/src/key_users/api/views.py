from rest_framework.generics import ListAPIView, RetrieveAPIView

from user_trophies.models import user_trophy
from .serializers import user_trophySerializer

class user_trophyListView(ListAPIView):
    queryset = user_trophy.objects.all()
    serializer_class = user_trophySerializer

class user_trophyDetailView(RetrieveAPIView):
    queryset = user_trophy.objects.all()
    serializer_class = user_trophySerializer
