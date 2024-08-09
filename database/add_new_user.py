import db_server

data_base = db_server.data_base
admin = db_server.admin

# def add_new_user():
#     new_user = []
#     #user_id is autoincremented
#     first_name = input("Enter your first name: ")
#     last_name = input("Enter your last name: ")
#     email = input("Enter your email address: ")
#     username = input("Choose a unique username: ")
#     password = input("Choose a strong password: ")
#     bio = input ("Tell others about yourself: ")
#     # date_joined = date_joined()
#     role = input("Which one describes you: 'Customer','Designer' or Manufacturer'?")
#     new_user = new_user + [first_name, last_name, email, username, password, bio, role]

#     try:
#         admin.execute("INSERT INTO user_info (first_name, last_name, email, user_name, password, bio, role) VALUES(?,?,?,?,?,?,?)", new_user)
#         data_base.commit()
#         print(f"\n{new_user} added to the table.")
        

#     except db_server.sql.OperationalError as e:
#         data_base.rollback()
#         print(f"\nRecord not added: {e}")
        
def add_users ():
    users = input("Add a list of users: ")
    
    try:
        for user in users:
            admin.execute("INSERT INTO user_info (first_name, last_name, email, user_name, password, bio, role) VALUES(?,?,?,?,?,?,?)", user)
            data_base.commit()
            # print(f"\n{users} added to the table.")
            

    except db_server.sql.OperationalError as e:
        data_base.rollback()
        print(f"\nRecord not added: {e}")

if __name__ == "__main__":
    # add_new_user()
    add_users()
    