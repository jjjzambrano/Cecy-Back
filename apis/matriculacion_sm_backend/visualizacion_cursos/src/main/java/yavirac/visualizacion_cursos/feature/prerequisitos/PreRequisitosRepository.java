package yavirac.visualizacion_cursos.feature.prerequisitos;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface PreRequisitosRepository extends CrudRepository<PreRequisitos, Long> {
    public List<PreRequisitos> findAll();
}
