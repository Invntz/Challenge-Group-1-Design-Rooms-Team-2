package com.wooah.scraping.service.impl;

import com.wooah.scraping.model.Product;
import com.wooah.scraping.repository.ProductRepository;
import com.wooah.scraping.service.ScrapingService;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.util.*;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@Service
public class DebenhamsScrapingService implements ScrapingService {

    private final ProductRepository productRepository;
    private final ExecutorService executorService;

    public DebenhamsScrapingService(ProductRepository productRepository) {
        this.productRepository = productRepository;
        this.executorService = Executors.newFixedThreadPool(10);
    }

    public ExecutorService getExecutorService() {
        return executorService;
    }

    @Override
    public List<Product> scrap(String categoryUrl) {
        Set<String> seenProducts = Collections.synchronizedSet(new HashSet<>());

        List<CompletableFuture<List<Product>>> futures = IntStream.range(2, 100) // Adjust range as needed
                .mapToObj(pageNumber -> CompletableFuture.supplyAsync(() -> scrapePage(categoryUrl, 2, seenProducts), executorService))
                .collect(Collectors.toList());

        List<Product> products = futures.stream()
                .map(CompletableFuture::join)
                .flatMap(List::stream)
                .collect(Collectors.toList());

        return products;
    }


//    private List<Product> scrapePage(String categoryUrl, int pageNumber, Set<String> seenProducts) {
    public List<Product> scrapePage(String categoryUrl, int pageNumber, Set<String> seenProducts) {
        pageNumber = 2;
        List<Product> products = new ArrayList<>();
        WebDriver driver = initializeWebDriver();
        try {
            driver.get(categoryUrl + "?page=" + pageNumber);
            WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
            wait.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector("div[data-product-id]")));

            Document doc = Jsoup.parse(driver.getPageSource());
            Elements productElements = doc.select("div[data-product-id]");
            if (productElements.isEmpty()) {
                return products;
            }
            int count = 1;

            for (Element productElement : productElements) {
                String productUrl = "https://www.debenhams.com" + productElement.select("a[data-test-id^='product-card-link']").attr("href");
                System.out.println("["+pageNumber+"]["+count+"] productUrl: "+productUrl);
                driver.get(productUrl);

//            if (!productElements.isEmpty()) {
//                Element productElement = productElements.get(0);  // Get the first element
//                String productUrl = "https://www.debenhams.com" + productElement.select("a[data-test-id^='product-card-link']").attr("href");
//                System.out.println("["+pageNumber+"]["+count+"] productUrl: "+productUrl);
//                driver.get(productUrl);
                wait.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector("span")));

                Document productDoc = Jsoup.parse(driver.getPageSource());
                String sku = extractSKU(productDoc);

                if (!seenProducts.contains(sku)) {
                    seenProducts.add(sku);
                    Product product = extractProductDetails(productElement, productDoc, sku);
                    productRepository.save(product);
                    products.add(product);
                }
                count++;
            }
        } catch (Exception e) {
            System.out.println("Failed to scrape page " + pageNumber + " of category: " + categoryUrl);
            e.printStackTrace();
        } finally {
            driver.quit();
        }

        return products;
    }

    private WebDriver initializeWebDriver() {
        System.setProperty("webdriver.chrome.driver", "/opt/homebrew/Caskroom/chromedriver/127.0.6533.88/chromedriver-mac-arm64/chromedriver");

        ChromeOptions options = new ChromeOptions();
        options.addArguments("--headless");
        options.addArguments("--no-sandbox");
        options.addArguments("--disable-dev-shm-usage");
        options.addArguments("user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3");

        return new ChromeDriver(options);
    }

    private String extractSKU(Document productDoc) {
        for (Element span : productDoc.select("span")) {
            if (span.text().contains("SKU:")) {
                return span.text().replace("SKU:", "").trim();
            }
        }
        return "";
    }

    private Product extractProductDetails(Element productElement, Document productDoc, String sku) {
        String title = productElement.select("span[data-test-id='product-card-title']").text();
        String category = productDoc.select("title").text().split("\\|")[0].trim();
        String priceText = productElement.select("span[data-test-id='product-price-current']").text();
        double price = parsePrice(priceText);

        // Correctly extract the image URL from the product page
        String imageUrl = productElement.select("img.w-full.h-full.object-cover.undefined").attr("src");

        // Extract color
        Element colorElement = productDoc.select("span.font-medium").first();
        String color = (colorElement != null) ? colorElement.text().trim() : "Unknown";

        // Extract sizes
        Elements sizeElements = productDoc.select("div[data-test-id='size-guide'] button");
        List<String> sizes = sizeElements.eachText();
        String size = String.join(", ", sizes);

        // Extract description using refined selector
//        Element descriptionElement = productDoc.select("div[data-test-id='accordion-Description-content'] p").first();
//        String description = (descriptionElement != null) ? descriptionElement.text().trim() : "";
        // Extract description
        Element descriptionElement = productDoc.select("div[data-test-id='accordion-Description-content'] p").first();
        String description = (descriptionElement != null) ? descriptionElement.text().trim() : "";
        description = description.length() > 255 ? description.substring(0, 255) : description;

        System.out.println("Extracted description: " + description);

        // Extract material from the "Product Details & Care" section
        Element materialElement = productDoc.select("div[data-test-id='accordion-Product Details & Care-content'] p").first();
        String material = (materialElement != null) ? materialElement.text().trim() : "";

        // Simple extraction by finding the material substring
        int startIndex1 = material.indexOf(": ") + 2; // Find the start after ": "
        int endIndex1 = material.indexOf("/"); // Find the end before the first "/"

        if (startIndex1 > 1 && endIndex1 > startIndex1) {
            material = material.substring(startIndex1, endIndex1).trim();
        } else {
            material = "/"; // Default to "/" if not found
        }

        System.out.println("Extracted material: " + material);

        // Extract brand from JSON-LD structured data (if available)
        String brand = "";
        Elements scriptElements = productDoc.select("script[type='application/ld+json']");
        for (Element scriptElement : scriptElements) {
            String scriptContent = scriptElement.html();
            if (scriptContent.contains("\"brand\"")) {
                int startIndex = scriptContent.indexOf("\"brand\"") + 8;
                int endIndex = scriptContent.indexOf("\"", startIndex + 8);
                brand = scriptContent.substring(startIndex, endIndex).replaceAll("[^a-zA-Z0-9 ]", "");
                break;
            }
        }

        Product product = new Product();
        product.setSku(sku);
        product.setTitle(title);
        product.setCategory(category);
        product.setPrice(price);
        product.setSize(size);
        product.setColor(color);
        product.setDescription(description); // Set extracted description
        product.setBrand(brand);
        product.setMaterial(material);
        product.setImage(imageUrl);

        return product;
    }











    private double parsePrice(String priceText) {
        if (priceText.isEmpty()) {
            return 0;
        }
        // Remove any characters that are not digits or decimal points
        String cleanedPriceText = priceText.replaceAll("[^0-9.]", "");
        // Handle multiple decimal points by keeping only the first one
        int firstDotIndex = cleanedPriceText.indexOf('.');
        if (firstDotIndex != -1) {
            cleanedPriceText = cleanedPriceText.substring(0, firstDotIndex + 1) + cleanedPriceText.substring(firstDotIndex + 1).replaceAll("\\.", "");
        }
        return Double.parseDouble(cleanedPriceText);
    }

    private String extractSize(Document productDoc) {
        // Logic to extract size
        return productDoc.select("span[data-test-id='product-size']").text();
    }

    private String extractColor(Document productDoc) {
        // Logic to extract color
        return productDoc.select("span[data-test-id='product-color']").text();
    }

    private String extractDescription(Document productDoc) {
        // Logic to extract description
        return productDoc.select("div[data-test-id='product-description']").text();
    }

    private String extractBrand(Document productDoc) {
        // Logic to extract brand
        return productDoc.select("span[data-test-id='product-brand']").text();
    }


    private String extractMaterial(Document productDoc) {
        // Logic to extract material
        return productDoc.select("span[data-test-id='product-material']").text();
    }


}
