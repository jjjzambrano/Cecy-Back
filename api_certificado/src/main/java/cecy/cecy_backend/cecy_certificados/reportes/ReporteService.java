package cecy.cecy_backend.cecy_certificados.reportes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReporteService {
    @Autowired ReporteRepository entityRepository;
    public Reporte save(Reporte entity) {
        return entityRepository.save(entity);
    }

    public Reporte findById(Long id) {
        return entityRepository.findById(id).orElse(new Reporte());
    }

    public void deleteById(Long id) {
        entityRepository.deleteById(id);
    }

    public List<Reporte> findAll() {
        return entityRepository.findAll();
    }
}
