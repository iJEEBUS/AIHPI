from django.urls import path, include
from django.contrib import admin

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('api/trophies/', include('trophies.api.urls')),
    path('api/topics/', include('topics.api.urls')),
    path('api/problems/', include('problems.api.urls')),
    path('api/users/', include('users.api.urls')),
    path('api/keys/', include('keys.api.urls')),
    path('admin/', admin.site.urls),
]
