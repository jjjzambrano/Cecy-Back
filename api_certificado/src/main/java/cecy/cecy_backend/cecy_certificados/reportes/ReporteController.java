package cecy.cecy_backend.cecy_certificados.reportes;

import java.net.http.HttpHeaders;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
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

import cecy.cecy_backend.cecy_certificados.codigos.Codigos;
import cecy.cecy_backend.cecy_certificados.matriculas.Matriculas;
import cecy.cecy_backend.cecy_certificados.matriculas.MatriculasService;
import net.sf.jasperreports.engine.JasperPrint;

@RestController
@RequestMapping("api/reporte")
@CrossOrigin({"*"})
public class ReporteController {
    @Autowired ReporteService reporteService;
    @Autowired MatriculasService matriculasService;

   /*
     @GetMapping ("/reporte-matricula")
    public String reporte(Codigos codigos){
        Map< Long , String[]> tablaMatricula = new HashMap<> ();
        Reporte reporte;
        /*if (codigos.getReporteId() == 0) {
            reporte = new Reporte();
      
          } else {
            factura = facturaService.findById(detalleYFactura.getFacturaId());
          }
            Codigos codigo = new Codigos();
            codigo.setMatriculas(null);;
            codigo.setReporteId(reporte);
      
            reporte.getCodigos().add(codigos);
      
            reporte = reporteService.save(reporte);
      
            detalleYFactura.setFacturaId(factura.getFacturaId());
      
            Map<Long, String[]> tablaFactura = new HashMap<>();
      
            for (DetalleFactura filaFactura : factura.getDetalleFactura()) {
              Cliente cliente = clienteService.findById(filaFactura.getClienteId());
              Producto producto = productoService.findById(filaFactura.getProductoId());
      
              String[] filaTabla = new String[] {
                  cliente.getNombre(),
                  producto.getNombre(),
                  String.valueOf(filaFactura.getCantidadProducto())
              };
      
              tablaFactura.put(filaFactura.getDetalleFacturaId(), filaTabla);
            }
      
            model.addAttribute("tablaFactura", tablaFactura);
            model.addAttribute("detalleYFactura", detalleYFactura);
            vista = "factura/factura";
          }
    }*/

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
    /*@GetMapping("/pdf/{id}/")
	public ResponseEntity<byte[]> getCertificadosReporte(@PathVariable long id) throws JRException {

		JasperPrint certificados = certificadosService.getCertificadosReporte(id);
        if (certificados==null)
            return new ResponseEntity<byte[]>(null, null, HttpStatus.NOT_FOUND);
		HttpHeaders headers = new HttpHeaders();
		// set the PDF format
		headers.setContentType(MediaType.APPLICATION_PDF);
		headers.setContentDispositionFormData("filename", "certificado.pdf");
		// create the report in PDF format
		return new ResponseEntity<byte[]>(JasperExportManager.exportReportToPdf(certificados), headers, HttpStatus.OK);

	}*/
}
