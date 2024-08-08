import login, signUp

def read_file():
    try:
        with open("menuOptions.txt") as fileRead:
            fr = fileRead.read()
        return fr  
    except FileNotFoundError as nf:
        print(f"Check {nf}")


def main_optionmenu():
    Option = 0
    OptionList = ["1","2"]
    
    menuChoices = read_file()
    
    while Option not in OptionList:
        print(menuChoices)
        
        Option = input("Enter a number from the list provided. ")
        
        if Option not in OptionList:
            print(f"{Option} is not a valid choice!")
    return Option

mainProgram = True
while mainProgram: #While True
    mainMenu = main_optionmenu()#
    
    match mainMenu:
        case "1":
            login.insert_film()
        case "2":
            signUp.delete_film()
        case _:
            mainProgram = False 
input("Press the 'Enter' key to exit the program: ")   
