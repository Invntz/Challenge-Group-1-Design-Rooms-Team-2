import login, add_new_user
# Initial access screen (Alvin)
def menu_content():
    return """
Select Site Page.
1. Login
2. Sign Up
"""

def main_optionmenu():
    option = 0
    option_list = ["1","2"]
    
    menu_choices = menu_content()
    
    while option not in option_list:
        print(menu_choices)
        
        option = input("Enter a number from the list provided. ")
        
        if option not in option_list:
            print(f"{option} is not a valid choice!")
    return option

main_program = True
while main_program: #While True
    main_menu = main_optionmenu()
    
    match main_menu:
        case "1":
            login.login()
        case "2":
            add_new_user.add_new_user()
        case _:
            main_program = False 
input("Press the 'Enter' key to exit the program: ")   

if __name__ == "__main__":
    menu_content()