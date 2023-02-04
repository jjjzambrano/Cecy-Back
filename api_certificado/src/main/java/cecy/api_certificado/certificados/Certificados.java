package cecy.api_certificado.certificados;

import java.time.LocalDate;

import cecy.api_certificado.codigos.Codigos;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.Data;


@Data
@Entity
public class Certificados {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    // foreing Key de person
    private Long userId;
    // Foreing Key de Curso
    private Long courseId;
    // Foreing Key de Matricula
    private Long tuitionId;
    
    private String estado;
    private String guardarPdf;
    private LocalDate fecha;

    @OneToOne()
    @JoinColumn(name = "code_id", referencedColumnName = "id")
    private Codigos codigos;
}
