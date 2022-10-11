//comment in Javascript
// print out to user
console.log("string and integers " + 147)

//multiplication
var w = 4 * 2;
console.log(w)

//addition
var x = w + 3;
console.log(x)

//subtraction
var y = x - 1;
console.log(y)

//division
var z = y / 3;
console.log(z)

//find remainder of a division
var q = 9 % y;
console.log(q)

//increment (increasing by one)
var abc = 5;
abc++;
console.log(abc)

//decrement (decreasing by one)
var cba = 5;
cba--;
console.log(cba)

// variables and string
//declare a variable that cannot be changed
const Pi = 3.14; //trying to change the value of this value will result in an error

//declare a variable within a block of code
for(let name = 'Simon'; name.length < 10; name+="s") {
console.log(name) 
}

//declare variable within a function or globally
var variable
var variable1
var variable2

//assign value to variable
variable = "yes" // string
variable1 = 100 // integer
variable2 = 1.5 // float or decimal

//get number of letters in a string
var name = "Damilare";
nameLength = name.length;
console.log(nameLength)



//get first letter of a string
var firstLetterOfName = name[0];
console.log(firstLetterOfName)

//get last letter of a string
var lastLetterOfName = name[nameLength - 1];
console.log(lastLetterOfName)

//arrays

var myArray = ["David", 18];
console.log(myArray)
//nested arrays
var nestedArray = [["David", 18], ["Daniel", 20], ["Damilola", 27]];
console.log(nestedArray)

//get array data by index
var arrayData = nestedArray[1];
console.log(arrayData)
var arrayData1 = nestedArray[0][0];
console.log(arrayData1)

//modify array data

myArray[1] = 19;
console.log(myArray)

//add to the end of an array
myArray.push("Programmer");
console.log(myArray)

nestedArray.push(["Isaac", 26]);
console.log(nestedArray)

//remove the last data of an array
var removedArrays = nestedArray.pop();
console.log(nestedArray);

//remove the first data of an array
var removedArrays = nestedArray.shift();
console.log(nestedArray);

//add a new data at the beginning of an array
nestedArray.unshift(["Moses", 5]);
console.log(nestedArray);

//function
function functionName() {
    console.log("this is a function")
}
//callout the function
functionName();

//passing values to function
function addValues(a, b) {
    console.log(a + b) // function to add two values
}
//callout the function
addValues(2, 2);

//arrow function
var arrowFunc = (d, e) => d + e ;
console.log(arrowFunc(3, 3)) 

var arrowFunc = (f, g) => {
    return f + g} ;
console.log(arrowFunc("Arrow ", "Function")) 

//conditional statements

//if conditional statments
function compare(value) {
    if (value == 10) {
        return "It's the same thing"
    }
    return "no, they are different things"
}
console.log(compare(10));
console.log(compare(12));

//if-else conditional statements
function compare1(value1) {
    if (value1 == 5) {
        console.log("You inputed " + value1)
    } else {
        console.log("You did not input 5")
    }
}
compare1(5);

//else-if conditional statements
function compare2(value2) {
    if (value2 > 10) {
        console.log("Value is greater than 10")
    }else if (value2 < 10) {
        console.log("Value is lesser than 10")
    }else 
    console.log("Invalid Value!!!!")
}

compare2(9);

//for-in loop
let people = {"GOAT":"Wayne ", "queen":"Nicki ", "GOAT2":"Drake ", "Rookie":"Gudda ", "Rookie2":"Twist "};
let personas = ""

let h;
for (h in people) {
    personas += people[h];
    console.log(h)
}
console.log(personas)

//for-of loop
food = ["rice", "beans", "corn", "g-nut"]
for (x of food) {
    console.log(x)
}
//using for-in loop will print out it's index
for (x in food) {
    console.log(x)
}

//switch statements
function compare3(value3) {
    var result
    switch (value3) {
        case 1: 
            result = "sunday"
            break;
        case 2: 
            result = "monday"
            break;
        case 3: 
            result = "tuesday"
            break;   
        case 4: 
            result = "wednesday"
            break;   
        case 5: 
            result = "thursday"
            break;
        case 6: 
            result = "friday"
            break;
        case 7: 
            result = "saturday"
            break;
        default:
            result = "ERROR!!! : You have to put a number from 1 - 7"
            break;
    }
    return result;
}
console.log(compare3(6))

//objects
var myObject = {
    "name" : "Rex",
    "age" : 5,
    "breed" : "german shepherd",
    "last litters" : [8]
};
//accessing object data with dot notation
var dogName = myObject.name;
var dogAge = myObject.age;
console.log(dogName)
console.log(dogAge)
//accessing object data with bracket notation (to access data with bracket notation, the property must hae a space within)
var myObject1 = {
    "the name" : "Rex",
    "the age" : 5,
    "the breed" : "german shepherd",
    "last litters" : [8]
};

var dogName1 = myObject1["the name"];
var dogAge1 = myObject1["the age"];
console.log(dogName1)
console.log(dogAge1)




//objects for lookup
function lookup(val) { 

var alphaLookup = {
    "a" : "Alpha",
    "b" : "Beta",
    "g" : "gamma",
    "f" : "foxtrot",
};
return alphaLookup[val];
}
console.log(lookup("a"))

//testing objects for properties
var ourObject = {
    "sponge" : "bob",
    "squid" : "ward",
    "mr" : "krabs"
}

function testObj(ourProp) {
    if (ourObject.hasOwnProperty(ourProp)) {
        return ourObject[ourProp];
    }else {
    return "not found!!!"
}
}
console.log(testObj("mr"))

//manipulating complex objects
var multiObj = {
    "car" : {
        "inside" : {
            "dashboard" : "airfreshner",
            "glove box" : "map"
        },
        "outside":{
            "trunk" : "jack",
            "bonnet" : "engine"
        }
}
    
}
var carStuff = multiObj.car.inside["glove box"];
var carStuff1 = multiObj.car.outside["trunk"];
console.log(carStuff) 
console.log(carStuff1)

//accessing arrays in muliple objects
var multiObj1 = [
    {"type" : "race",
    "example" : ["black", "white", "hispanic", "mongloid"]
}, {
    "type1" : "gender",
    "example1" : ["male", "female",]
}

]
var pStuff = multiObj1[0].example[2];
var pStuff1 = multiObj1[1].example1[1];
console.log(pStuff) 
console.log(pStuff1)

//a record collection
var spotify = {
    "#0001" : {
        "artist" : "lil wayne",
        "album" : "carter 5",
        "tracks" : ["mona lisa", "can't be broken", "uproar"]
    },
    "#0002" : {
        "artist" : "drake",
        "album" : "clb",
        "tracks" : ["way too sexy", "you only live once", "toosie slide"]
    },
    "#0003" : {
        "artist" : "nicki minaj",
        "album" : "pink",
        "tracks" : ["high school", "only", "anaconda"]
    }
}
var wayneStuff = spotify["#0001"].album;
var drakeStuff = spotify["#0002"].album;
var nickiStuff = spotify["#0003"].album;

console.log(wayneStuff)
console.log(drakeStuff)
console.log(nickiStuff)

//update spotify (challenge above)
function updateSpotify(id, prop, value) {
    if (value === [""]) {
        delete spotify[id][prop]
    }else if (prop === "tracks") {
        spotify[id][prop] = spotify[id][prop] || [];
        spotify[id][prop].push(value);
    }else {
        spotify[id][prop] = value;
    }
    return spotify;
 
}
console.log(updateSpotify("#0003", "tracks", "petty"))
//loops
//while loops
const whily = [];
let i = 0;
while (i < 10) {
    whily.push(i)
    i++;
}

console.log(whily)

//for loop
forly = [];
for (i = 5; i > 0; i--) {
    forly.push(i)
}
console.log(forly)

//print even numbers
evenly = [];
for (var j = 0; j < 10; j+=2) {
    evenly.push(j)
}
console.log(evenly)
//print odd numbers

oddly = [];
for (var k = 1; k < 10; k+=2) {
    oddly.push(k)
}
console.log(oddly)
//do while loops
const dodo = [];
h = 10;
do {dodo.push(h);
    h++;

} while ((h < 5))

console.log(h, dodo)

//generate random numbers
//random decimal numbers from 0 to 1
function randecimal(){
    return Math.random();
}
console.log(randecimal())
//random whole numbers
var wn019 = Math.floor(Math.random() * 20); //Math.floor rounds a decimal/float number to it's nearest whole number 
function getWholeNumbers() {
    return wn019;
}
console.log(getWholeNumbers())

//random numbers within a range
function getRange(myMax, myMin) {
    return Math.floor(Math.random() * (myMax - myMin)) + myMin;
}
console.log(getRange(100, 10))

//parseInt function
function conInt(str) {
    return parseInt(str);
}
console.log(conInt("147"))
//parseFloat function
function conInt(str) {
    return parseFloat(str);
}
console.log(conInt("1.47"))

//radix with parseInt function
function radInt(str1) {
    return parseInt(str1, 2);
}
console.log(radInt("10101010"))