from django.urls import path

from .views import problem_topicListView, problem_topicDetailView

urlpatterns = [
    path('', problem_topicListView.as_view()),
    path('<pk>', problem_topicDetailView.as_view()),
]
