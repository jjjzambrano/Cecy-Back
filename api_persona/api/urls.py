from rest_framework.routers import DefaultRouter
from api.views import PersonaViewSet,TipoPersonaViewSet,CursoViewSet

router = DefaultRouter()

router.register('api/persona', PersonaViewSet)
router.register('api/tipopersona', TipoPersonaViewSet)
router.register('api/curso', CursoViewSet)
#Otras rutas

urlpatterns = []

urlpatterns += router.urls
