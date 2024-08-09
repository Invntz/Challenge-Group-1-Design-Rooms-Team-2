import sqlite3 as sql
import database

admin = database.admin
database= database.data_base

def update_record():
    selected_table = input("Are you updating details of a 'USER' or 'PRODUCT'? ")
    
    if selected_table.lower() == "user":
    
        selected_record = input("What is the USER ID of the record? ")
        selected_field = input("What are you updating? 'First Name', 'Last Name', 'Bio'? ")
        new_value = input("What is the NEW VALUE for the item? ")
        
        repeat = True
        while repeat:
            
            if selected_table.lower() == "first name":
                selected_table == "first_name"
            
            elif selected_table.lower() == "last name":
                selected_table == "last_name"
                break
            
            elif selected_table.lower() == "bio":
                selected_table == "bio"
                break
            
            else: 
                print("Invalid input, try again!")
            
            
        try:
                admin.execute(f"UPDATE customer_info SET {selected_field} = ? WHERE filmid = ?", (new_value, selected_record))
                database.commit()
                print(f"\nRecord {film_id} has been updated successfully.")

            except sql.OperationalError as e:
                database.rollback()
                print(f"\nRecord not updated: {e}")
                break
        
        
    # elif selected_table.lower() == "product":
    #     try:
    #         admin.execute(f"UPDATE tblfilms SET {field_name} = ? WHERE filmid = ?", (new_value, film_id))
    #         database.commit()
    #         print(f"\nRecord {film_id} has been updated successfully.")

    #     except sql.OperationalError as e:
    #         database.rollback()
    #         print(f"\nRecord not updated: {e}")
            
            


    

    try:
        admin.execute(f"UPDATE tblfilms SET {field_name} = ? WHERE filmid = ?", (new_value, film_id))
        database.commit()
        print(f"\nRecord {film_id} has been updated successfully.")

    except sql.OperationalError as e:
        database.rollback()
        print(f"\nRecord not updated: {e}")


if __name__ == "__main__":
    update_record()