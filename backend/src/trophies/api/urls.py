from django.urls import path

from .views import TrophyListView, TrophyDetailView

urlpatterns = [
    path('', TrophyListView.as_view()),
    path('<pk>', TrophyDetailView.as_view()),
]