package com.indoqa.quickstart.boot.main.resources;

import javax.annotation.PostConstruct;
import javax.inject.Named;

import com.indoqa.boot.json.resources.AbstractJsonResourcesBase;

@Named
public class TestJsonResource extends AbstractJsonResourcesBase {

    @PostConstruct
    public void mount() {
        this.get("/test", (req, res) -> new TestObject("Indoqa Quickstart Boot"));
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
