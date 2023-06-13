package cecy.cecy_backend.cecy_certificados.prueba2;

import cecy.cecy_backend.cecy_certificados.prueba1.Prueba1;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Data
@Entity
public class PruebaLinea {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Prueba1 prueba1;
}
