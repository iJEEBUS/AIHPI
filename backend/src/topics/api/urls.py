from django.urls import path

from .views import topicListView, topicDetailView


urlpatterns = [
    path('', topicListView.as_view()),
    path('<pk>', topicDetailView.as_view()),
]
