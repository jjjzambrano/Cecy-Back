package cecy.api_certificado.matricula;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "bff.customer-tuition", url = "http://localhost:8082/api/formInscription")
public interface CustomerTuition {
    @GetMapping("/{id}/")
    CustomerDTOTuition findTuitionByIdDto(@PathVariable("id") Long id);
}
