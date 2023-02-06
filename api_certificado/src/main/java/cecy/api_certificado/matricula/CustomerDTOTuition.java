package cecy.api_certificado.matricula;

import lombok.Data;

@Data
public class CustomerDTOTuition {
    private long id;
    private long userId;
    private long courseId;
    private String state;

}
