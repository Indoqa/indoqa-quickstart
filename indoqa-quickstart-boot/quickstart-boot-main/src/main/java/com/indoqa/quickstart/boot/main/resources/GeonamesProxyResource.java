package com.indoqa.quickstart.boot.main.resources;

import javax.annotation.PostConstruct;

import com.indoqa.boot.proxy.AbstractProxyResourceBase;

public class GeonamesProxyResource extends AbstractProxyResourceBase {

    @PostConstruct
    public void mount() {
        this.proxy("/geonames", "http://api.geonames.org");
    }
}
