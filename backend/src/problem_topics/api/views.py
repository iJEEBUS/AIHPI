from rest_framework.generics import ListAPIView, RetrieveAPIView

from problem_topics.models import problem_topic
from .serializers import problem_topicSerializer

class problem_topicListView(ListAPIView):
    queryset = problem_topic.objects.all()
    serializer_class = problem_topicSerializer

class problem_topicDetailView(RetrieveAPIView):
    queryset = problem_topic.objects.all()
    serializer_class = problem_topicSerializer
