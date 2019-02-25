from rest_framework.generics import ListAPIView, RetrieveAPIView

from trophies.models import Trophy
from .serializers import TrophySerializer

class TrophyListView(ListAPIView):
    queryset = Trophy.objects.all()
    serializer_class = TrophySerializer

class TrophyDetailView(RetrieveAPIView):
    queryset = Trophy.objects.all()
    serializer_class = TrophySerializer