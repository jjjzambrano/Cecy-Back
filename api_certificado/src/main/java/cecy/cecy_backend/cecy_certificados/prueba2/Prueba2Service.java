package cecy.cecy_backend.cecy_certificados.prueba2;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cecy.cecy_backend.cecy_certificados.prueba1.Prueba1Service;




@Service
public class Prueba2Service {
    @Autowired Prueba2Repository entityRepository;
    @Autowired Prueba1Service prueba1Service;
    public Prueba2 save(Prueba2 entity){
        return entityRepository.save(entity);
    }

    public Prueba2 findById( Long id){
        return entityRepository.findById(id).orElse(new Prueba2());
    }

    public void deleteById(Long id){
        entityRepository.deleteById(id);
    }

    public List<Prueba2> findAll(){
        return entityRepository.findAll();
    }
}
