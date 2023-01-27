package cecy.proyect.certificados;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.io.FileNotFoundException;
import java.sql.Date;
import java.util.HashMap;
import java.util.Map;
import org.springframework.util.ResourceUtils;
import net.sf.jasperreports.engine.JREmptyDataSource;
import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import cecy.proyect.curso.CustomerDTOCourse;
import cecy.proyect.curso.CustomerCourse;
import cecy.proyect.persona.CustomerDTO;
import cecy.proyect.persona.CustomerPerson;

    
@Service
public class CertificadoService {
    @Autowired CustomerPerson customerPerson;
    @Autowired CustomerCourse customerCourse;
    @Autowired CertificadoRepository entityRepository;

    public Certificados save(Certificados entity){
        return entityRepository.save(entity);
    }

    public Certificados findById( Long id){
        return entityRepository.findById(id).orElse(new Certificados());
    }

    public void deleteById(Long id){
        entityRepository.deleteById(id);
    }

    public List<Certificados> findAll(){
        return entityRepository.findAll();
    }

    public JasperPrint getCertificadoReporte(Long id) {

        Map<String, Object> reportParameters = new HashMap<String, Object>();
        Certificados certificados = findById(id);
        if (certificados.getId()==null)
            return null;
        
        reportParameters.put("estado", certificados.getEstado());
        reportParameters.put("fecha",Date.valueOf(certificados.getFecha()));

        CustomerDTO persona = customerPerson.findCustomerById(certificados.getId());
        reportParameters.put("nombre", persona.getNombre());
        reportParameters.put("cedula", persona.getCedula());

        CustomerDTOCourse curso = customerCourse.findCustomerById(certificados.getId());
        reportParameters.put("nombre", curso.getNombre());
        reportParameters.put("periodo_lectivo", curso.getPeriodoLectivo());
        reportParameters.put("paralelo", curso.getParalelo());

        JasperPrint reportJasperPrint = null;
        try {
            reportJasperPrint = JasperFillManager.fillReport(
                    JasperCompileManager.compileReport(
                            ResourceUtils.getFile("classpath:jrxml/factura.jrxml")
                                    .getAbsolutePath()) // path of the jasper report
                    , reportParameters // dynamic parameters
                    , new JREmptyDataSource());
        } catch (FileNotFoundException | JRException e) {
            e.printStackTrace();
        }
        return reportJasperPrint;
    }
}