package cecy.proyect.persona;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


@FeignClient(name = "bff.customer", url = "http://localhost:8000/api/persona")
public interface CustomerPerson {

    @GetMapping("/{id}/")
    CustomerDTO findCustomerById(@PathVariable("id") Long id);
}
