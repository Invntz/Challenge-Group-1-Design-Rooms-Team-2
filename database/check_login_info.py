import hashlib #provides the SHA-512 hasing function( Secure Hash Algorithm - algoritm to convert text into fixed-size string) 
import base64 #used to encode and decode the salt and hashed password ( salt- a random number to incorporate into the data input and hashing- transform data of arbitrary size into data of fixed size and unique )
import uuid  # generate a random, unique value use as a salt1212
def hash_password(password):
    
    salt = uuid.uuid4().bytes
    password_hash = hashlib.sha512(password.encode('utf-8') + salt).digest() #passwoard hashed  
    salt_encoded = base64.urlsafe_b64encode(salt) #base64 encode binary data into a text string 
    hashed_password_encoded = base64.urlsafe_b64encode(password_hash) #salt and hash encode in URL-safe way for storage to be easily stored in database 
    return salt_encoded, hashed_password_encoded

def verify_password(input_password, stored_salt, stored_hashed_password):
    salt = base64.urlsafe_b64decode(stored_salt) #converts the stored base64-encode salt back to its original byte format

    password_hash = hashlib.sha512(input_password.encode('utf-8') + salt).digest() #combines the user input password(encoded in UTF) and decoded sald and hases 
    input_hashed_password = base64.urlsafe_b64encode(password_hash)
    return input_hashed_password == stored_hashed_password  # Compare the newly hashed input password with the stored hashed password

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




# if __name__ == "__main__":
#     check_login_info()