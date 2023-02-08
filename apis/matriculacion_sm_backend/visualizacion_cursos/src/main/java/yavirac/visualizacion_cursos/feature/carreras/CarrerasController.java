package yavirac.visualizacion_cursos.feature.carreras;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/carreras")
@CrossOrigin({ "*" })
public class CarrerasController {
    @Autowired
    CarrerasService carrerasService;

    @GetMapping("/")
    public List<Carreras> findAll() {
        return carrerasService.findAll();
    }

    @GetMapping("/{id}/")
    public Carreras findById(@PathVariable Long id) {
        return carrerasService.findById(id);
    }

    @GetMapping("/findByName/{term}/")
    public List<Carreras> findByName(@PathVariable String term) {
        return carrerasService.findByName(term);
    }

}
