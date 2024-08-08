import db_server

db_server.data_base.execute("""
CREATE TABLE tblfilms (
    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_name TEXT,
    first TEXT,
    last_name TEXT,
    password INT,
    token_invalidator TEXT,
    bio,
    date_joined,
    last_login,
    is_active,
    role,
    subscription_type
)""")