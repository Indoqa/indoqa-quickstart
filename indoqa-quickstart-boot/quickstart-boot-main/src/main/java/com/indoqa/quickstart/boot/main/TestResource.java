package com.indoqa.quickstart.boot.main;

import javax.annotation.PostConstruct;
import javax.inject.Named;

import com.indoqa.boot.AbstractJsonResourcesBase;

@Named
public class TestResource extends AbstractJsonResourcesBase {

    @PostConstruct
    public void mount() {
        this.get("/test", (req, res) -> new TestObject("indoqa-boot"));
    }

    public static class TestObject {

        private String name;

        public TestObject(String name) {
            this.name = name;
        }

        public String getName() {
            return this.name;
        }
    }
}
