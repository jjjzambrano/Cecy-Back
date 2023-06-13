package cecy.cecy_backend.cecy_certificados.prueba2;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface Prueba2Repository extends CrudRepository<Prueba2, Long> {
    List<Prueba2> findAll();
}
