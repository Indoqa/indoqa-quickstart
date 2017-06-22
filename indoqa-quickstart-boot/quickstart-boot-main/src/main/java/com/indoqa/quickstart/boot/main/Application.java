package com.indoqa.quickstart.boot.main;

import static com.indoqa.quickstart.boot.main.resources.FrontendResource.FRONTEND_FILESYSTEM_LOCATION;

import java.io.File;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.indoqa.boot.application.AbstractIndoqaBootApplication;
import com.indoqa.boot.application.AbstractStartupLifecycle;
import com.indoqa.quickstart.boot.main.resources.FrontendResource;

public class Application extends AbstractIndoqaBootApplication {

    private static final String APPLICATION_NAME = "quickstart-boot";
    private static final String BASE_PACKAGE = Application.class.getPackage().getName();

    public static void main(String[] args) {
        new Application().invoke(new ApplicationStartupLifecycle());
    }

    @Override
    protected String getApplicationName() {
        return APPLICATION_NAME;
    }

    @Override
    protected String[] getComponentScanBasePackages() {
        return new String[] {BASE_PACKAGE};
    }

    @Override
    protected boolean isDevEnvironment() {
        return new File(FRONTEND_FILESYSTEM_LOCATION).exists();
    }

    private static class ApplicationStartupLifecycle extends AbstractStartupLifecycle {

        @Override
        public void willCreateDefaultSparkRoutes(AnnotationConfigApplicationContext context) {
            // the FrontendResource must be registered before any Spark routes are registered
            context.register(FrontendResource.class);
        }
    }
}
