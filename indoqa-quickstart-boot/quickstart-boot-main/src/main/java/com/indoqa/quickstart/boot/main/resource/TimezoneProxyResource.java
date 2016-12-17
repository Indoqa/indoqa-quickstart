package com.indoqa.quickstart.boot.main.resource;

import javax.annotation.PostConstruct;
import javax.inject.Named;

import com.indoqa.boot.proxy.AbstractProxyResourceBase;

@Named
public class TimezoneProxyResource extends AbstractProxyResourceBase {

    @PostConstruct
    public void mount() {
        this.proxy("/geonames", "http://api.geonames.org");
    }
}
