package yavirac.visualizacion_cursos.feature.cursos;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CursosService {
    @Autowired
    CursosRepository cursosRepository;

    public Cursos save(Cursos cursos) {
        return cursosRepository.save(cursos);
    }

    public Cursos findById(Long id) {
        return cursosRepository.findById(id).orElse(new Cursos());
    }

    public List<Cursos> findAll() {
        return cursosRepository.findAll();
    }

    public void deleteById(Long id) {
        cursosRepository.deleteById(id);
    }

    public List<Cursos> findByName(String term) {
        return cursosRepository.findByNombreLikeIgnoreCase(term + "%");
    }

}
