from rest_framework import serializers
from api.models import Persona, Tipo_persona, Curso

class TipoPersonaSerializer (serializers.ModelSerializer):
    class Meta:
        model = Tipo_persona
        fields = "__all__"

class PersonaSerializer (serializers.ModelSerializer):
    class Meta:
        model = Persona
        fields = "__all__"

class CursoSerializer (serializers.ModelSerializer):
    class Meta:
        model = Curso
        fields = "__all__"