package com.wooah.scraping.service;

import com.wooah.scraping.model.Product;

import java.util.List;
import java.util.Set;
import java.util.concurrent.ExecutorService;

public interface ScrapingService {

    // Existing method for scraping multiple products
    List<Product> scrap(String url);

//    List<Product> scrapePage(String url);

    List<Product> scrapePage(String url, int pageNumber, Set<String> seenProducts);
}
