package yavirac.visualizacion_cursos.feature.cursos;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import lombok.Data;
import yavirac.visualizacion_cursos.feature.contenido.Contenido;
import yavirac.visualizacion_cursos.feature.horarios.Horarios;
import yavirac.visualizacion_cursos.feature.instructores.Instructores;
import yavirac.visualizacion_cursos.feature.prerequisitos.PreRequisitos;
import yavirac.visualizacion_cursos.feature.requerimientos.Requerimientos;

@Data
@Entity
public class Cursos {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;
    private boolean gratis;
    private Integer cupos;
    private String estado;
    // private String duracion;
    private Date fechaInicio;
    private Date fechaFin;
    private String descripcion;
    private String fotoUrl;
    // relacion de muchos a muchos con instructores

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "cursos_instructores", joinColumns = @JoinColumn(name = "instructores_id", referencedColumnName = "id"), inverseJoinColumns = @JoinColumn(name = "cursos_id", referencedColumnName = "id"))
    private List<Instructores> instructores = new ArrayList<>();

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "cursos_id")
    private List<Requerimientos> requerimientos = new ArrayList<>();

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "cursos_prerequisitos", joinColumns = @JoinColumn(name = "pre_requisitos_id", referencedColumnName = "id"), inverseJoinColumns = @JoinColumn(name = "cursos_id", referencedColumnName = "id"))
    private List<PreRequisitos> preRequisitos = new ArrayList<>();

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "cursos_id")
    private List<Contenido> contenidos = new ArrayList<>();

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "cursos_horarios", joinColumns = @JoinColumn(name = "horarios_id", referencedColumnName = "id"), inverseJoinColumns = @JoinColumn(name = "cursos_id", referencedColumnName = "id"))
    private List<Horarios> horarios = new ArrayList<>();

}
