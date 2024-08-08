# this is the Sign Up page
import db_server

data_base = db_server.data_base
admin = db_server.admin

def add_new_user():
    new_user = []
    #user_id is autoincremented
    first_name = input("Enter film title: ")
    last_name = int(input("Enter year released: "))
    username = input("Choose a unique username: ")
    password = input("Choose a strong password: ")
    bio = input ("Tell others about yourself: ")
    # date_joined = date_joined()
    role = input("Which one describes you? 'Customer','Designer' or Manufacturer'?")
    new_user = new_user + [first_name, last_name, username, password, bio, role]

    try:
        admin.execute("INSERT INTO customers (first_name, last_name, username, password, bio, role) VALUES(?,?,?,?,?,?)", new_user)
        data_base.commit()
        print(f"\n{new_user} added to the customers table.")

    except db_server.sql.OperationalError as e:
        data_base.rollback()
        print(f"\nRecord not added: {e}")

if __name__ == "__main__":
    add_new_user()