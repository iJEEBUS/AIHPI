from rest_framework.generics import ListAPIView, RetrieveAPIView

from topics.models import topic
from .serializers import topicSerializer

class topicListView(ListAPIView):
    queryset = topic.objects.all()
    serializer_class = topicSerializer

class topicDetailView(RetrieveAPIView):
    queryset = topic.objects.all()
    serializer_class = topicSerializer
