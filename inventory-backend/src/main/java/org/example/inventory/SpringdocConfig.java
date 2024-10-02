package org.example.inventory;

import io.swagger.v3.oas.models.OpenAPI;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


@Configuration
public class SpringdocConfig {
    @Bean
    public OpenAPI myOpenAPI() {
        return new OpenAPI();
    }
}