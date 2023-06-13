package cecy.cecy_backend.cecy_certificados.prueba2;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
@RequestMapping("api/prueba2")
@CrossOrigin({"*"})
public class Prueba2Controller {
    @Autowired Prueba2Service prueba2Service;

    @GetMapping("/")
    public List<Prueba2> findAll(){
        return prueba2Service.findAll();
    }

    @GetMapping("/{id}/")
    public Prueba2 findById(@PathVariable Long id){
        return prueba2Service.findById(id);
    }

    @PostMapping("/")
    public Prueba2 save(@RequestBody Prueba2 entity){
        return  prueba2Service.save(entity);
    }

    @PutMapping("/{id}/")
    public Prueba2 update(@RequestBody Prueba2 entity){
        return prueba2Service.save(entity);
    }

    @DeleteMapping("/{id}/")
    public void deleteById(@PathVariable Long id){
        prueba2Service.deleteById(id);
    }
}

