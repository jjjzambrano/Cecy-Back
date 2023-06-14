package cecy.cecy_backend.cecy_certificados.reportes;



import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import cecy.cecy_backend.cecy_certificados.matriculas.MatriculasService;
import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperPrint;

@RestController
@RequestMapping("api/reporte")
@CrossOrigin({"*"})
public class ReporteController {
    @Autowired ReporteService reporteService;
    @Autowired MatriculasService matriculasService;
    @GetMapping("/")
    public List<Reporte> findAll(){
        return reporteService.findAll();
    }

    @GetMapping("/{id}/")
    public Reporte findById(@PathVariable Long id){
        return reporteService.findById(id);
    }

    @PostMapping("/")
    public Reporte save(@RequestBody Reporte entity){
        return reporteService.save(entity);
    }

    @PutMapping("/{id}/")
    public Reporte update(@RequestBody Reporte entity){
        return reporteService.save(entity);
    }

    @DeleteMapping("/{id}/")
    public void deleteById(@PathVariable Long id){
        reporteService.deleteById(id);
    }
    @GetMapping("/pdf/{id}/")
    public ResponseEntity<byte[]> getReporte(@PathVariable long id) throws JRException {

        JasperPrint reporte = reporteService.getReporte(id);

        if (reporte == null)
            return new ResponseEntity<byte[]>(null, null, HttpStatus.NOT_FOUND);

        HttpHeaders headers = new HttpHeaders();
        // set the PDF format
        headers.setContentType(MediaType.APPLICATION_PDF);
        headers.setContentDispositionFormData("filename", "reporte.pdf");
        // create the report in PDF format
        return new ResponseEntity<byte[]>(JasperExportManager.exportReportToPdf(reporte), headers, HttpStatus.OK);

    }
}
