package com.indoqa.quickstart.boot.main.resource;

import java.io.File;

import javax.annotation.PostConstruct;

import com.indoqa.boot.html.react.AbstractReactResourceBase;

public class FrontendResource extends AbstractReactResourceBase {

    private static final String CLASSPATH_LOCATION = "/quickstart-boot-frontend";
    private static final String FILESYSTEM_LOCATION = new File("../quickstart-boot-frontend/target").getPath();

    @PostConstruct
    public void mount() {
        this.html("/", CLASSPATH_LOCATION, FILESYSTEM_LOCATION);
    }
}
