import login, add_new_user
import os

def read_file():
    try:
        print(f"Current working directory: {os.getcwd()}")
        print(f"Looking for file: {os.path.abspath('menu_options1.txt')}")
        
        with open("menu_options1.txt") as fileRead:
            fr = fileRead.read()
            print(fr)
        return fr  
    except FileNotFoundError as nf:
        print(f"Check {nf}")

# def read_file():
#     try:
#         with open("menu_options1.txt") as fileRead:
#             fr = fileRead.read()
#             print(fr)
#         return fr  
#     except FileNotFoundError as nf:
#         print(f"Check {nf}")


def main_optionmenu():
    option = 0
    option_list = ["1","2"]
    
    menu_choices = read_file()
    
    while option not in option_list:
        print(menu_choices)
        
        option = input("Enter a number from the list provided. ")
        
        if option not in option_list:
            print(f"{option} is not a valid choice!")
    return option

main_program = True
while main_program: #While True
    main_menu = main_optionmenu()#
    
    match main_menu:
        case "1":
            login.login()
        case "2":
            add_new_user.add_new_user()
        case _:
            main_program = False 
input("Press the 'Enter' key to exit the program: ")   
