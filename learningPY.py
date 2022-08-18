# this is a comment

# print out to user
print("Hello World ")

# multiplication *
w = 4 * 2
print(w)

# addition +
x = w + 3
print(x)

# subtraction
y = x - 1
print(y)

# division
z = y / 3
print(z)

# finding the remainder of a division
q = 9 % y
print(q)

# unlike Javascript and some other languages Python does not have an increment and decrement operator

# variables and string

# variables don't need to be declared in python
# you just need to assign their value directly

# data types in Python
variable = "yes"  # string
variable1 = 100  # integer
variable2 = 1.5  # float or decimal
variable3 = True  # Boolean(True or False)

print(variable)
print(type(variable))

print(variable1)
print(type(variable1))

print(variable2)
print(type(variable2))

print(variable3)
print(type(variable3))

# get the number of letters in a string
name = "Damilare"
nameLength = len(name)
print(nameLength)

# get first letter of a string
firstLetterOfName = name[0]
print(firstLetterOfName)

# get last letter of a string
lastLetterOfName = name[nameLength - 1]
print(lastLetterOfName)

# arrays
myArray = ["David", 18]
print(myArray)

# nested arrays
nestedArray = [["David", 18], ["Daniel", 20], ["Damilola", 27]]
print(nestedArray)

# get array data by index
arrayData = nestedArray[1]
print(arrayData)
arrayData1 = nestedArray[0][0]
print(arrayData1)

# modify array data

myArray[1] = 19
print(myArray)

# add to an array
myArray.insert(2, "Programmer")
print(myArray)

# add to the end of an array
myArray.append("Entrepreneur")
print(myArray)

nestedArray.insert(3, ["Isaac", 26])
print(nestedArray)

# pop() is used to delete an element in the array using index notation
removedArrays = nestedArray.pop(0)
print(nestedArray)

# remove() is used to remove an element in the array by calling its value
nestedArray.remove(["Isaac", 26])
print(nestedArray)

# add a new data at the beginning of an array
nestedArray.insert(0, ["Moses", 5])
print(nestedArray)
