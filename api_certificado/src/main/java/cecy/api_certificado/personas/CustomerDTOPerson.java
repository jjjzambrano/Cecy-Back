package cecy.api_certificado.personas;

import lombok.Data;

@Data
public class CustomerDTOPerson {
    private long id;
    private String cedula;
    private String nombres;
    private String apellidos;
}
