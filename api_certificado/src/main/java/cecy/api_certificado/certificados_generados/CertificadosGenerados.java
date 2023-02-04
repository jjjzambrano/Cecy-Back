package cecy.api_certificado.certificados_generados;

import cecy.api_certificado.certificados.Certificados;
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
public class CertificadosGenerados {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @OneToOne()
    @JoinColumn(name = "certificado_id", referencedColumnName = "id")
    private Certificados certicadoId;
    @OneToOne()
    @JoinColumn(name = "code_id", referencedColumnName = "id")
    private Codigos codigos;
}
