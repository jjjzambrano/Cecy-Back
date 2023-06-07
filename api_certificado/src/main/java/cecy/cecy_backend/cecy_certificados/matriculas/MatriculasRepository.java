package cecy.cecy_backend.cecy_certificados.matriculas;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface MatriculasRepository extends CrudRepository<Matriculas, Long> {
    List<Matriculas> findAll();
    
    List<Matriculas> findByEstadoMatriculaDescripcion(String tem);

    List<Matriculas> findByCursoId(int id);

    List<Matriculas> findByEstadoCursoDescripcion(String tem);
}
