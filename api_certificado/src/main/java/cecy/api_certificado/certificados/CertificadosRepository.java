package cecy.api_certificado.certificados;

import java.util.List;
import org.springframework.data.repository.CrudRepository;

public interface CertificadosRepository extends CrudRepository<Certificados, Long> {

    public List<Certificados> findAll();
}
