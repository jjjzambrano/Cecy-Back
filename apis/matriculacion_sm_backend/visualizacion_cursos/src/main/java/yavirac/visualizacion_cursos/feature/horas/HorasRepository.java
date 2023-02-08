package yavirac.visualizacion_cursos.feature.horas;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface HorasRepository extends CrudRepository<Horas, Long> {
    public List<Horas> findAll();
}
