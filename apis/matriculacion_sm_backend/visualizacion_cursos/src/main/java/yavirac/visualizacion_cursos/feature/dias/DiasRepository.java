package yavirac.visualizacion_cursos.feature.dias;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface DiasRepository extends CrudRepository<Dias, Long> {
    public List<Dias> findAll();
}
