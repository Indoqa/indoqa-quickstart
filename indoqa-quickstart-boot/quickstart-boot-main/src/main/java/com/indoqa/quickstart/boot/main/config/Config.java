package com.indoqa.quickstart.boot.main.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

import com.indoqa.quickstart.boot.main.resources.GeonamesProxyResource;
import com.indoqa.quickstart.boot.main.resources.TestJsonResource;

@Configuration
@PropertySource("classpath:/application.properties")
public class Config {

    @Bean
    public GeonamesProxyResource geonamesProxyResource() {
        return new GeonamesProxyResource();
    }

    @Bean
    public TestJsonResource testJsonResource() {
        return new TestJsonResource();
    }
}
