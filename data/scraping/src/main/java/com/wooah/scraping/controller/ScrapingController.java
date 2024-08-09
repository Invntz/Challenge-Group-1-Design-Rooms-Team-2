package com.wooah.scraping.controller;

import com.wooah.scraping.model.Product;
import com.wooah.scraping.service.ScrapingService;
import com.wooah.scraping.service.TestScrapingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.concurrent.CompletableFuture;
import java.util.stream.Collectors;

@RestController
public class ScrapingController {
    private final ScrapingService scrapingService;
    private final TestScrapingService testScrapingService;

    @Autowired
    public ScrapingController(ScrapingService scrapingService, TestScrapingService testScrapingService){
        this.scrapingService = scrapingService;
        this.testScrapingService = testScrapingService;
    }

    @GetMapping("/testSelenium")
    public String testSelenium() {
        String url = "https://www.debenhams.com";
        return TestScrapingService.testSelenium(url);
    }

//    @GetMapping("/getData")
//    public String ProductService() {
//        return TestScrapingService.testSelenium();
//    }

    @GetMapping("/scrap")
    public List<Product> scrap() {
        String url = "https://www.debenhams.com/categories/view-all";
        System.out.println("firstCategoryUrl: " + url);
        Set<String> seenProducts = new HashSet<>();
        return scrapingService.scrapePage(url, 1, seenProducts);
//        return scrapingService.scrape(url);
    }

}
