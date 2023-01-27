package cecy.proyect.certificados;
import java.util.List;
import org.springframework.data.repository.CrudRepository;

public interface CertificadoRepository extends CrudRepository<Certificados, Long> {

    public List<Certificados> findAll();
}

