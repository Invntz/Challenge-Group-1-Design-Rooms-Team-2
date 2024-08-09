import login, add_new_user, read_dbrecords
# Access screen for the user 
def menu_user():
    return """
1. View purchase history
2. View specific purchase
"""

def main_user_menu():
    option = 0
    option_list = ["1","2"]
    
    menu_choices = menu_user()
    
    while option not in option_list:
        print(menu_choices)
        
        option = input("Enter a number from the list provided. ")
        
        if option not in option_list:
            print(f"{option} is not a valid choice!")
    return option

main_program = True
while main_program: #While True
    main_menu = main_user_menu()
    
    match main_menu:
        case "1":
            read_dbrecords.read_purchase_history()
        case "2":
            read_dbrecords.specify_purchase_history()
        case _:
            main_program = False 
input("Press the 'Enter' key to exit the program: ")   

if __name__ == "__main__":
    menu_user()