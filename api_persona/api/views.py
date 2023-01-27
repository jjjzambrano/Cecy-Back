from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from api.models import Persona,Tipo_persona,Curso
from api.serializers import PersonaSerializer,TipoPersonaSerializer,CursoSerializer

class TipoPersonaViewSet ( viewsets.ModelViewSet ):
    serializer_class = TipoPersonaSerializer
    queryset = Tipo_persona.objects.all()
   
class PersonaViewSet ( viewsets.ModelViewSet ):
    serializer_class = PersonaSerializer
    queryset = Persona.objects.all()

class CursoViewSet ( viewsets.ModelViewSet ):
    serializer_class = CursoSerializer
    queryset = Curso.objects.all()
#... otras viewset
