package com.indoqa.quickstart.boot.main.config;

import com.indoqa.quickstart.boot.main.resources.GeonamesProxyResource;
import com.indoqa.quickstart.boot.main.resources.TestJsonResource;
import com.indoqa.quickstart.boot.main.resources.WordsProxyResource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

@Configuration
@PropertySource("classpath:/application.properties")
public class Config {

    @Bean
    public GeonamesProxyResource geonamesProxyResource() {
        return new GeonamesProxyResource();
    }

    @Bean
    public WordsProxyResource wordsProxyResource() {
        return new WordsProxyResource();
    }

    @Bean
    public TestJsonResource testJsonResource() {
        return new TestJsonResource();
    }
}
