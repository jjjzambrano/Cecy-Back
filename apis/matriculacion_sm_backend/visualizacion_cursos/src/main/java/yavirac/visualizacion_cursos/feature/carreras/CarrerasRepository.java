package yavirac.visualizacion_cursos.feature.carreras;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface CarrerasRepository extends CrudRepository<Carreras, Long> {
    public List<Carreras> findAll();

    public List<Carreras> findByNombreLikeIgnoreCase(String term);

}