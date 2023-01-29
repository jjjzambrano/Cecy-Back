package cecy.proyect.curso;

import lombok.Data;

@Data
public class CustomerDTOCourse {
    private Long id;
    private String nombre;
    private String estadoCurso;
    private String periodoLectivo;
    private String paralelo;
}

