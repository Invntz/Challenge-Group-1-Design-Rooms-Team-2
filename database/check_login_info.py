import db_server
import sqlite3


data_base = db_server.data_base
admin = db_server.admin

def check_login_info():
    # Ask the user for username and password
    username = input("Enter username: ")
    password = input("Enter password: ")
    
    try:
        admin.execute(f"SELECT * FROM customer_info")
        result = admin.fetchall()
        print(result)
        all_records = []
    # Check if the credentials are correct
        for record in result:
            if record['username'] == username and record['password'] == password:
                print("Login successful!")
                return True
        
        # If no match found
        print("Login failed. Invalid username or password.")
        return False

    except Exception as e:
        print(f"An error occurred: {e}")
        return False


    except:
        pass


    # if check_login_info(username, password):
    #     print("Login successful!")
    # else:
    #     print("Login failed. Invalid username or password.")




import hashlib #provides the SHA-512 hasing function( Secure Hash Algorithm - algoritm to convert text into fixed-size string) 
import base64 #used to encode and decode the salt and hashed password ( salt- a random number to incorporate into the data input and hashing- transform data of arbitrary size into data of fixed size and unique )
import uuid  # generate a random, unique value use as a salt

def hash_password(password):
    
    salt = uuid.uuid4().bytes #random salt
    password_hash = hashlib.sha512(password.encode('utf-8') + salt).digest() #passwoard hashed  
    salt_encoded = base64.urlsafe_b64encode(salt) #base64 encode binary data into a text string 
    hashed_password_encoded = base64.urlsafe_b64encode(password_hash) #salt and hash encode in URL-safe way for storage to be easily stored in database 
    return salt_encoded, hashed_password_encoded



def verify_password(input_password, stored_salt, stored_hashed_password):
    salt = base64.urlsafe_b64decode(stored_salt) #converts the stored base64-encode salt back to its original byte format

    password_hash = hashlib.sha512(input_password.encode('utf-8') + salt).digest() #combines the user input password(encoded in UTF) and decoded sald and hases 
    input_hashed_password = base64.urlsafe_b64encode(password_hash)
    
    # Compare the newly hashed input password with the stored hashed password
    return input_hashed_password == stored_hashed_password

def main():

    password = input("Enter a password to store: ")
    salt, hashed_password = hash_password(password)#hash and store the password 
    
    print("Stored Salt:", salt.decode())
    print("Stored Hashed Password:", hashed_password.decode())
    
    input_password = input("Re-enter the password to verify: ")
    if verify_password(input_password, salt, hashed_password):
        print("Verification Successful! The password matches.")
    else:
        print("Verification Failed. The password does not match.")

if __name__ == "__main__":
    main()




if __name__ == "__main__":
    check_login_info()