package cecy.cecy_backend.cecy_certificados.prueba1;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class Prueba1Service {
    @Autowired Prueba1Repository entityRepository;

    public Prueba1 save(Prueba1 entity){
        return entityRepository.save(entity);
    }

    public Prueba1 findById( Long id){
        return entityRepository.findById(id).orElse(new Prueba1());
    }

    public void deleteById(Long id){
        entityRepository.deleteById(id);
    }

    public List<Prueba1> findAll(){
        return entityRepository.findAll();
    }
}
