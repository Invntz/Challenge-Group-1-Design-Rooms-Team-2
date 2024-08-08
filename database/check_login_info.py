import db_server
import sqlite3


data_base = db_server.data_base
admin = db_server.admin

def check_login_info(username, password):
    # Ask the user for username and password
    username = input("Enter username: ")
    password = input("Enter password: ")
    
    try:
        admin.execute(f"SELECT * FROM customer_info")
        result = admin.fetchall()
        print(result)
        all_records = []
    # Check if the credentials are correct

    except:
        pass


    # if check_login_info(username, password):
    #     print("Login successful!")
    # else:
    #     print("Login failed. Invalid username or password.")

