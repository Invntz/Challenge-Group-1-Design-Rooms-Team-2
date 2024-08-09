# Bulk purchase table input function
import db_server
import ast

data_base = db_server.data_base
admin = db_server.admin


def add_purchases():
    purchases = input("Add a list of purchases: ")
    purchases = ast.literal_eval(purchases)    
    
    for purchase in purchases:
        try:
            admin.execute("INSERT INTO purchase ('first_name', 'last_name', 'email', 'user_name', 'password', 'bio', 'role') VALUES(?,?,?,?,?,?,?)", purchase)
            data_base.commit()
            # print(f"\n{purchases} added to the table.")
            

        except db_server.sql.OperationalError as e:
            data_base.rollback()
            print(f"\nRecord not added: {e}")

if __name__ == "__main__":
    # add_new_user()
    add_purchases()

