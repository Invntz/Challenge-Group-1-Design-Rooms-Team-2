import db_server

admin = db_server.admin
def read_purchase_history():
    try:
        rows = admin.execute(f"SELECT * FROM purchase").fetchall()

        if not rows:
            print("No record(s) exists")
        else:
            for a_record in rows:
                print(a_record)
            
    except db_server.sql.OperationalError as e:
        print(f"Records not found: as {e}")
if __name__ == "__main__":
    read_purchase_history()
    
    
def specify_purchase_history():
    try:
        rows = admin.execute(f"SELECT * FROM purchase").fetchall()

        if not rows:
            print("No record(s) exists")
        else:
            for a_record in rows:
                print(a_record)
            
    except db_server.sql.OperationalError as e:
        print(f"Records not found: as {e}")
if __name__ == "__main__":
    specify_purchase_history()
