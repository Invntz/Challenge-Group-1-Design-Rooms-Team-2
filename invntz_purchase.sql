CREATE TABLE purchase (
    purchase_id INT,           
    user_id INT,                 
    first_name VARCHAR(50),     
    last_name VARCHAR(50),       
    email VARCHAR(100),      
    order_num INT,            
    qty_purchased INT,            
    items_purchased TEXT,      
    date_purchased DATETIME,     
    brand VARCHAR(50),            
    basket_price DECIMAL(10, 2)   
);

-- Insert purchase history for user_id = 1 (John Doe)
INSERT INTO purchase (purchase_id, user_id, first_name, last_name, email, order_num, qty_purchased, items_purchased, date_purchased, brand, basket_price) VALUES
(1, 1, 'John', 'Doe', 'john.doe@example.com', 1001, 2, 'Red Shirt, Blue Jeans', '2024-06-05 14:30:00', 'FashionCo', 89.99),
(2, 1, 'John', 'Doe', 'john.doe@example.com', 1002, 1, 'Black Leather Jacket', '2024-07-15 09:00:00', 'UrbanWear', 129.50);

-- Insert purchase history for user_id = 17 (Oscar Martinez)
INSERT INTO purchase (purchase_id, user_id, first_name, last_name, email, order_num, qty_purchased, items_purchased, date_purchased, brand, basket_price) VALUES
(3, 17, 'Oscar', 'Martinez', 'oscar.martinez@example.com', 2001, 3, 'Green Hoodie, Gray Sweatpants', '2024-06-10 16:45:00', 'ComfortWear', 95.00),
(4, 17, 'Oscar', 'Martinez', 'oscar.martinez@example.com', 2002, 1, 'White Sneakers', '2024-08-01 11:20:00', 'SneakerShop', 75.00);

-- Insert purchase history for user_id = 40 (Lily Parker)
INSERT INTO purchase (purchase_id, user_id, first_name, last_name, email, order_num, qty_purchased, items_purchased, date_purchased, brand, basket_price) VALUES
(5, 40, 'Lily', 'Parker', 'lily.parker@example.com', 3001, 2, 'Blue Dress, Black Sandals', '2024-06-12 12:30:00', 'StyleCity', 120.00),
(6, 40, 'Lily', 'Parker', 'lily.parker@example.com', 3002, 1, 'Pink Scarf', '2024-07-20 13:00:00', 'AccessoryHub', 25.50),
(7, 40, 'Lily', 'Parker', 'lily.parker@example.com', 3003, 1, 'Yellow Sunglasses', '2024-08-05 15:15:00', 'VisionWear', 40.75);

-- Insert purchase history for user_id = 25 (Wendy Allen)
INSERT INTO purchase (purchase_id, user_id, first_name, last_name, email, order_num, qty_purchased, items_purchased, date_purchased, brand, basket_price) VALUES
(8, 25, 'Wendy', 'Allen', 'wendy.allen@example.com', 4001, 1, 'Purple Skirt', '2024-06-25 17:00:00', 'TrendyWear', 59.99),
(9, 25, 'Wendy', 'Allen', 'wendy.allen@example.com', 4002, 2, 'White Blouse, Black Pants', '2024-07-30 10:30:00', 'OfficeStyle', 89.90);

-- Insert purchase history for user_id = 7 (Emily Moore)
INSERT INTO purchase (purchase_id, user_id, first_name, last_name, email, order_num, qty_purchased, items_purchased, date_purchased, brand, basket_price) VALUES
(10, 7, 'Emily', 'Moore', 'emily.moore@example.com', 5001, 2, 'Beige Cardigan, Blue Jeans', '2024-08-12 14:00:00', 'ChicWear', 85.75);

SELECT *
FROM purchase

SELECT *
FROM purchase
LEFT JOIN invntz_user1 ON purchase.user_id = invntz_user1.user_id
