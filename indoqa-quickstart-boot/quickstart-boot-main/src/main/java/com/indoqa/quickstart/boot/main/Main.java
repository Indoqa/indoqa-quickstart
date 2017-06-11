package com.indoqa.quickstart.boot.main;

import static com.indoqa.quickstart.boot.main.resource.FrontendResource.FRONTEND_FILESYSTEM_LOCATION;

import java.io.File;

import com.indoqa.boot.AbstractIndoqaBootApplication;

public class Main extends AbstractIndoqaBootApplication {

    private static final String BASE_PACKAGE = Main.class.getPackage().getName();

    public static void main(String[] args) {
        new Main().invoke(new AppStartupLifecycle());
    }

    @Override
    protected String[] getComponentScanBasePackages() {
        return new String[] {BASE_PACKAGE};
    }

    @Override
    protected boolean isDevEnvironment() {
        return new File(FRONTEND_FILESYSTEM_LOCATION).exists();
    }
}
