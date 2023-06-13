package cecy.cecy_backend.cecy_certificados.prueba1;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface Prueba1Repository extends CrudRepository<Prueba1, Long> {
    public List<Prueba1> findAll();
}
