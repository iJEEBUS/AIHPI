from rest_framework.generics import ListAPIView, RetrieveAPIView

from problems.models import Problem
from .serializers import ProblemSerializer

class ProblemListView(ListAPIView):
    queryset = Problem.objects.all()
    serializer_class = ProblemSerializer

class ProblemDetailView(RetrieveAPIView):
    queryset = Problem.objects.all()
    serializer_class = ProblemSerializer