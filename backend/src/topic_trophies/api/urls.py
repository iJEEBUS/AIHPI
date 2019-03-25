from django.urls import path

from .views import topic_trophyListView, topic_trophyDetailView

urlpatterns = [
    path('', topic_trophyListView.as_view()),
    path('<pk>', topic_trophyDetailView.as_view()),
]
