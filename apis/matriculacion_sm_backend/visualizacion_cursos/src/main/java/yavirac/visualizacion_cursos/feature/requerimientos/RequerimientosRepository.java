package yavirac.visualizacion_cursos.feature.requerimientos;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface RequerimientosRepository extends CrudRepository<Requerimientos, Long> {
    public List<Requerimientos> findAll();

}
