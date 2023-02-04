package cecy.api_certificado.codigos;

import java.util.List;
import org.springframework.data.repository.CrudRepository;

public interface CodigosRepository extends CrudRepository<Codigos, Long> {
     
    public List<Codigos> findAll();
}
