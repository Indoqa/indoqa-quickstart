package com.indoqa.quickstart.boot.main;

import com.indoqa.boot.AbstractIndoqaBootApplication;

public class Main extends AbstractIndoqaBootApplication {

    private static final String BASE_PACKAGE = Main.class.getPackage().getName();

    public static void main(String[] args) {
        new Main().invoke();
    }

    @Override
    protected String[] getComponentScanBasePackages() {
        return new String[] {BASE_PACKAGE};
    }
}
