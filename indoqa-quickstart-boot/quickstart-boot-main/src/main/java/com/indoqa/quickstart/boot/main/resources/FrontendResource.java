package com.indoqa.quickstart.boot.main.resources;

import javax.annotation.PostConstruct;

import com.indoqa.boot.html.react.AbstractReactResourceBase;

public class FrontendResource extends AbstractReactResourceBase {

    private static final String FRONTEND_FILESYSTEM_LOCATION = "../quickstart-boot-frontend/target/webpack/";
    private static final String FRONTEND_CLASSPATH_LOCATION = "/quickstart-boot-frontend";

    @PostConstruct
    public void mount() {
        this.html("/", FRONTEND_CLASSPATH_LOCATION, FRONTEND_FILESYSTEM_LOCATION);
    }
}
