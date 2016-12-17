package com.indoqa.quickstart.boot.main;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.indoqa.boot.lifecycle.AbstractStartupLifecycle;
import com.indoqa.quickstart.boot.main.resource.FrontendResource;

public class AppStartupLifecycle extends AbstractStartupLifecycle {

    private AnnotationConfigApplicationContext context;

    @Override
    public void didCreateSpringContext(AnnotationConfigApplicationContext context) {
        this.context = context;
    }

    @Override
    public void willCreateDefaultSparkRoutes() {
        // the FrontendResource must be registered before any Spark routes are registered
        this.context.register(FrontendResource.class);
    }
}
