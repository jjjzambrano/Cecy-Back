package cecy.api_certificado.cursos;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "bff.customer-course", url = "http://localhost:3000/api/v1/planifications-courses")

public interface CustomerCourse {
    @GetMapping("/{id}/")
    CustomerDTOCourse findCourseByIdDto(@PathVariable("id") Long id);
    @GetMapping("/")
    List<CustomerDTOCourse> findCourse();
}
