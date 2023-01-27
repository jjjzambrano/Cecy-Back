from django.db import models
class Tipo_persona (models.Model):
    tipo = models.CharField(max_length=80)  

class Persona (models.Model):
    nombre = models.CharField(max_length=80)
    cedula = models.IntegerField()
    fecha_nacimiento = models.DateField(auto_now=False, auto_now_add=False)
    correo = models.CharField(max_length=80)
    tipo=models.ForeignKey(Tipo_persona,on_delete=models.PROTECT)

class Curso (models.Model):
    nombre = models.CharField(max_length=80)  
    persona_curso = models.ManyToManyField(Persona())
    estado_curso = models.CharField(max_length=50)  
    periodo_lectivo = models.CharField(max_length=50)  
    paralelo = models.CharField(max_length=50)  