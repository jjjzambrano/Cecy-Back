package yavirac.visualizacion_cursos.feature.horarios;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import lombok.Data;
import yavirac.visualizacion_cursos.feature.dias.Dias;
import yavirac.visualizacion_cursos.feature.horas.Horas;

@Data
@Entity
public class Horarios {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "horarios_dias", joinColumns = @JoinColumn(name = "dias_id", referencedColumnName = "id"), inverseJoinColumns = @JoinColumn(name = "horarios_id", referencedColumnName = "id"))
    private List<Dias> dias = new ArrayList<>();

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "horarios_horas_inicio", joinColumns = @JoinColumn(name = "horas_id", referencedColumnName = "id"), inverseJoinColumns = @JoinColumn(name = "horarios_id", referencedColumnName = "id"))
    private List<Horas> horaInicio = new ArrayList<>();

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "horarios_horas_fin", joinColumns = @JoinColumn(name = "horas_id", referencedColumnName = "id"), inverseJoinColumns = @JoinColumn(name = "horarios_id", referencedColumnName = "id"))
    private List<Horas> horaFin = new ArrayList<>();
}
