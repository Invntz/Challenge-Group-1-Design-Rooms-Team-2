import db_server

data_base = db_server.data_base
admin = db_server.admin

def add_records():
    new_record = []
    new_record = new_record + []

    try:
        admin.execute("INSERT INTO user_info () VALUES(?)", new_record)
        data_base.commit()
        print(f"\n{new_record} added to the table.")

    except db_server.sql.OperationalError as e:
        data_base.rollback()
        print(f"\nRecord not added: {e}")
        

if __name__ == "__main__":
    add_records()