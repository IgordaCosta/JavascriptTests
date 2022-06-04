import os

def FindMyDocumentsDatabasePath():

    Folder='AutoFormFillerKey'

    home = os.path.expanduser('~')
        
    # print(home)
    
    location = os.path.join(home, 'Documents', Folder)
    
    # print(location)
    
    # folder_check = os.path.isdir(location)
    
    # print(folder_check)
    
    if not os.path.exists(location):
        os.makedirs(location)
        # print('folder created')
    else:
        # print("folder exists")
        pass


    print(location)







FindMyDocumentsDatabasePath()

