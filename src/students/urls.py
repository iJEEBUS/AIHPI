"""
This file contains the routing for the API.

When a request is received by the server this will determine where to send
that users request to.

@author Ron Rounsifer
@version 0.01
"""

from rest_framework import routers
from .api import StudentViewSet, TrophyViewSet, TopicViewSet, ProblemViewSet

# create and register pages with the router
router = routers.DefaultRouter()
router.register('api/students', StudentViewSet, 'students')
router.register('api/trophies', TrophyViewSet, 'trophies')
router.register('api/topics', TopicViewSet, 'topics')
router.register('api/problems', ProblemViewSet, 'problems')

urlpatterns = router.urls
