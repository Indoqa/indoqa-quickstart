package com.indoqa.quickstart.boot.main;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.indoqa.boot.application.AbstractIndoqaBootApplication;
import com.indoqa.boot.application.AbstractStartupLifecycle;
import com.indoqa.quickstart.boot.main.config.Config;
import com.indoqa.quickstart.boot.main.resources.FrontendResource;

public class Application extends AbstractIndoqaBootApplication {

    private static final String APPLICATION_NAME = "quickstart-boot";

    public static void main(String[] args) {
        new Application().invoke(new ApplicationStartupLifecycle());
    }

    @Override
    protected String getApplicationName() {
        return APPLICATION_NAME;
    }

    private static class ApplicationStartupLifecycle extends AbstractStartupLifecycle {

        @Override
        public void willCreateDefaultSparkRoutes(AnnotationConfigApplicationContext context) {
            // the FrontendResource must be registered before any Spark routes are registered
            context.register(FrontendResource.class);
        }

        @Override
        public void willRefreshSpringContext(AnnotationConfigApplicationContext context) {
            context.register(Config.class);
        }
    }
}
