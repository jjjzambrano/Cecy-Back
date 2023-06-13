package cecy.cecy_backend.cecy_certificados.reportes;

import java.time.LocalDate;
import java.util.List;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import cecy.cecy_backend.cecy_certificados.codigos.Codigos;
import cecy.cecy_backend.cecy_certificados.cursos.conexion.Course;
import cecy.cecy_backend.cecy_certificados.matriculas.Matriculas;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import lombok.Data;
@Data
@Entity
public class Reporte {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDate fechaReporte;
    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinTable(name = "Reporte-Matricula",
            joinColumns = {
                    @JoinColumn(name = "reporte_id", referencedColumnName = "id")
            },
            inverseJoinColumns = {
                    @JoinColumn(name = "matriculas_id", referencedColumnName = "id")
            }
    )
    @JsonManagedReference
    private Set<Matriculas> matriculas;
}
