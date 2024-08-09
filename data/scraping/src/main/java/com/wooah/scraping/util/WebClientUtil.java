package com.wooah.scraping.util;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;

import java.io.IOException;

public class WebClientUtil {
    public static Document fetchPage(String url) throws IOException {
        return Jsoup.connect(url).get();
    }
}
