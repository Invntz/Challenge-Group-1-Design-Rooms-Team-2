package com.wooah.scraping.service;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.springframework.stereotype.Service;

import java.io.FileWriter;
import java.io.PrintWriter;
import java.util.List;

@Service
public class TestScrapingService {

    public static String testSelenium(String url) {
        // Set the path to the ChromeDriver executable
        System.setProperty("webdriver.chrome.driver", "/opt/homebrew/Caskroom/chromedriver/127.0.6533.88/chromedriver-mac-arm64/chromedriver");

        // Create a new instance of the Chrome driver
        WebDriver driver = new ChromeDriver();

        try {
            // Launch the specified URL
            driver.get(url);

            // Get the title of the page
            String pageTitle = driver.getTitle();

            // Return the page title
            return pageTitle;
        } finally {
            // Close the browser
            driver.quit();
        }
    }
//
//    private final ProductRepository productRepository;
//
//    public ProductService(ProductRepository productRepository) {
//        this.productRepository = productRepository;
//    }
//
//    public List<Product> getAllProducts() {
//        return productRepository.findAll();
//    }
//
//    public void exportProductsToCsv() {
//        List<Product> products = getAllProducts();
//        try (PrintWriter writer = new PrintWriter(new FileWriter("products.csv"))) {
//            writer.println("ID,SKU,Title,Category,Size,Color,Price,Description,Brand,Rating,Material,Image,Style,Caption");
//            for (Product product : products) {
//                writer.printf("%d,%s,%s,%s,%s,%s,%.2f,%s,%s,%.2f,%s,%s,%s,%s\n",
//                        product.getId(),
//                        product.getSku(),
//                        product.getTitle(),
//                        product.getCategory(),
//                        product.getSize(),
//                        product.getColor(),
//                        product.getPrice(),
//                        product.getDescription(),
//                        product.getBrand(),
//                        product.getRating(),
//                        product.getMaterial(),
//                        product.getImage(),
//                        product.getStyle(),
//                        product.getCaption());
//            }
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//    }
}
