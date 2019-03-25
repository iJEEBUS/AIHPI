from rest_framework.generics import ListAPIView, RetrieveAPIView

from topic_trophies.models import topic_trophy
from .serializers import topic_trophySerializer

class topic_trophyListView(ListAPIView):
    queryset = topic_trophy.objects.all()
    serializer_class = topic_trophySerializer

class topic_trophyDetailView(RetrieveAPIView):
    queryset = topic_trophy.objects.all()
    serializer_class = topic_trophySerializer
