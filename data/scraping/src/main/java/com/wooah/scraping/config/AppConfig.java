package com.wooah.scraping.config;

import com.wooah.scraping.service.ScrapingService;
import com.wooah.scraping.service.impl.DebenhamsScrapingService;
import org.springframework.context.annotation.Bean;

public class AppConfig {
    @Bean
    public ScrapingService scrapingService(DebenhamsScrapingService debenhamsScrapingService) {
        return debenhamsScrapingService;
    }
}
