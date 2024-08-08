import db_server

db_server.data_base.execute("""
CREATE TABLE customers (
    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_name TEXT NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    password TEXT NOT NULL,
    token_invalidator TEXT,
    bio TEXT,
    date_joined DATE,
    last_login DATE,
    is_active BOOLEAN,
    role VARCHAR(50),
    subscription_type TEXT
)""")

