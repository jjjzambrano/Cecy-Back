package cecy.cecy_backend.cecy_certificados.prueba1;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/prueba1")
@CrossOrigin({"*"})
public class Prueba1Controller {
    @Autowired Prueba1Service prueba1Service;

    @GetMapping("/")
    public List<Prueba1> findAll(){
        return prueba1Service.findAll();
    }

    @GetMapping("/{id}/")
    public Prueba1 findById(@PathVariable Long id){
        return prueba1Service.findById(id);
    }

    @PostMapping("/")
    public Prueba1 save(@RequestBody Prueba1 entity){
        return prueba1Service.save(entity);
    }

    @PutMapping("/{id}/")
    public Prueba1 update(@RequestBody Prueba1 entity){
        return prueba1Service.save(entity);
    }

    @DeleteMapping("/{id}/")
    public void deleteById(@PathVariable Long id){
        prueba1Service.deleteById(id);
    }
}
