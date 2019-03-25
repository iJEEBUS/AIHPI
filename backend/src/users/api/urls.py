from django.urls import path

from .views import userListView, userDetailView


urlpatterns = [
    path('', userListView.as_view()),
    path('<pk>', userDetailView.as_view()),
]
