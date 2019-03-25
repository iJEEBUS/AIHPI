from django.urls import path

from .views import user_trophyListView, user_trophyDetailView

urlpatterns = [
    path('', user_trophyListView.as_view()),
    path('<pk>', user_trophyDetailView.as_view()),
]
