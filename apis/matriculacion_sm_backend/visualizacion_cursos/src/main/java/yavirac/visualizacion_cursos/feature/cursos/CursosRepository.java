package yavirac.visualizacion_cursos.feature.cursos;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface CursosRepository extends CrudRepository<Cursos, Long> {
    public List<Cursos> findAll();

    public List<Cursos> findByNombreLikeIgnoreCase(String term);

}
