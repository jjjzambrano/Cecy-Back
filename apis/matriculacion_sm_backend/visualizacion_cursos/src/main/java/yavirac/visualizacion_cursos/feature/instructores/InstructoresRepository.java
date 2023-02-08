package yavirac.visualizacion_cursos.feature.instructores;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface InstructoresRepository extends CrudRepository<Instructores, Long> {
    public List<Instructores> findAll();
}
