from random import randint


first_name = input("What's your first name : ")
last_name = input("What's your last name : ")
numbers = randint(999, 99999)

if len(first_name) > 5:
    x = first_name[0:4]
else:
    x = first_name
y = last_name[0: 3]
username = x + y + str(numbers)

print(username)
