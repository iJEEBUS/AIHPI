from django.urls import path

from .views import ProblemListView, ProblemDetailView

urlpatterns = [
    path('', ProblemListView.as_view()),
    path('<pk>', ProblemDetailView.as_view()),
]