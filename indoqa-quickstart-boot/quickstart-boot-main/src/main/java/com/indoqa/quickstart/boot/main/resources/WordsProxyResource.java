package com.indoqa.quickstart.boot.main.resources;

import javax.annotation.PostConstruct;

import com.indoqa.boot.proxy.AbstractProxyResourceBase;

public class WordsProxyResource extends AbstractProxyResourceBase {

    @PostConstruct
    public void mount() {
        this.proxy("/words", "http://api.wordnik.com");
    }
}
