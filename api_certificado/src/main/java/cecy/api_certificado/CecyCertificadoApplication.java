package cecy.api_certificado;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@EnableFeignClients
@SpringBootApplication
public class CecyCertificadoApplication {

	public static void main(String[] args) {
		SpringApplication.run(CecyCertificadoApplication.class, args);
	}

}
