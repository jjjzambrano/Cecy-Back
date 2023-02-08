package yavirac.visualizacion_cursos.feature.carreras;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CarrerasService {
    @Autowired
    CarrerasRepository carrerasRepository;

    public Carreras save(Carreras entity) {
        return carrerasRepository.save(entity);
    }

    public Carreras findById(Long id) {
        return carrerasRepository.findById(id).orElse(new Carreras());
    }

    public List<Carreras> findAll() {
        return carrerasRepository.findAll();
    }

    public void deleteById(Long id) {
        carrerasRepository.deleteById(id);
    }

    public List<Carreras> findByName(String term) {
        return carrerasRepository.findByNombreLikeIgnoreCase(term + "%");
    }

}
