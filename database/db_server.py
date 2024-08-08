import sqlite3 as sql

try:
    with sql.connect("invntz.db") as data_base:
        admin = data_base.cursor()

except sql.OperationalError as e:
    print(f"Connection Failed!, {e}")
    