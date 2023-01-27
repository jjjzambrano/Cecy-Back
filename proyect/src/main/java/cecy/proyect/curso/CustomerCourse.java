package cecy.proyect.curso;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


@FeignClient(name = "bff.customer-course", url = "http://localhost:8000/api/curso")
public interface CustomerCourse {

    @GetMapping("/{id}/")
    CustomerDTOCourse findCustomerById(@PathVariable("id") Long id);
}

