import db_server

try:
    # Create the table
    db_server.data_base.execute("""
    CREATE TABLE IF NOT EXISTS user_info (
        user_id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_name TEXT NOT NULL,
        first_name TEXT NOT NULL,
        last_name TEXT NOT NULL,
        email TEXT NOT NULL,
        hashed_password TEXT NOT NULL,
        salt_code TEXT NOT NULL,
        token_invalidator TEXT,
        bio TEXT,
        date_joined DATE,
        last_login DATE,
        is_active BOOLEAN,
        role VARCHAR(50),
        subscription_type TEXT,
        profile_img TEXT
    )""")

 # Create the purchase table
    db_server.data_base.execute("""
    CREATE TABLE IF NOT EXISTS purchase (
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
    )
    """)
    
    
except Exception as e:
    print(f"An error occurred: {e}")