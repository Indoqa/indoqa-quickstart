package com.indoqa.quickstart.boot.main.resource;

import java.io.File;

import com.indoqa.boot.jsapp.AbstractReactFrontendResource;

public class FrontendResource extends AbstractReactFrontendResource {

    private static final String MOUNT_PATH = "/*";
    private static final String CLASSPATH_LOCATION = "/quickstart-boot-frontend";
    private static final String FILESYSTEM_LOCATION = new File("../quickstart-boot-/target").getPath();

    public FrontendResource() {
        super(MOUNT_PATH, CLASSPATH_LOCATION, FILESYSTEM_LOCATION);
    }
}
