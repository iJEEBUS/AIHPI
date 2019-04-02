from django.urls import path

from .views import key_userListView, key_userDetailView


urlpatterns = [
    path('', key_userListView.as_view()),
    path('<pk>', key_userDetailView.as_view()),
]
