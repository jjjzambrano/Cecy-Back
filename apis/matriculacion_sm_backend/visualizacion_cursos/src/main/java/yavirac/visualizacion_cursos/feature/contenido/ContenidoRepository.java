package yavirac.visualizacion_cursos.feature.contenido;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface ContenidoRepository extends CrudRepository<Contenido, Long> {
    public List<Contenido> findAll();
}
