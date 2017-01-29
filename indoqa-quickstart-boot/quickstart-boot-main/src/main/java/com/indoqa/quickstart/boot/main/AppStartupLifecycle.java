package com.indoqa.quickstart.boot.main;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.indoqa.boot.lifecycle.AbstractStartupLifecycle;
import com.indoqa.quickstart.boot.main.resource.FrontendResource;

public class AppStartupLifecycle extends AbstractStartupLifecycle {

    @Override
    public void willCreateDefaultSparkRoutes(AnnotationConfigApplicationContext context) {
        // the FrontendResource must be registered before any Spark routes are registered
        context.register(FrontendResource.class);
    }
}
