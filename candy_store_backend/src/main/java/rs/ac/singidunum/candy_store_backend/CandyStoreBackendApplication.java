package rs.ac.singidunum.candy_store_backend;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CandyStoreBackendApplication {

    @Bean
    public ModelMapper modelMapper(){ return new ModelMapper(); }
    public static void main(String[] args) {
        SpringApplication.run(CandyStoreBackendApplication.class, args);
    }

}
