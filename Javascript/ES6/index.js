// let and const
/*
let name = "David"
console.log(name)

let isOldEnough = true
console.log(isOldEnough)

let age = 19
console.log(age)

let marks = [14, 56, 63, 55, 95, 95]
console.log(marks)

let gymPlan = {
        Monday : "Upper body",
        Tuesday : "Basketball",
        Wednesday : "Lower body",
        Thursday : "Basketball",
        Friday : "Upper body",
        Saturday : "Basketball",
        Sunday : "Rest"
}
console.log(gymPlan)

const YOB = 2003
const MOB = "April"
const day = 16

// template literals
console.log(`${day}  ${MOB} ${YOB}`)

function adder(a, b) {
    return a + b
}

console.log(`The addition of 1 and 3 is ${adder(1, 3)}`)

// arrow functions
const greetings = (name) => {
    return `Good morning ${name}`
}

const greetings1 = (name) =>   `Good afternoon ${name}`

console.log(greetings("David"))

console.log(greetings1("David"))

// rest operator
const count = (...nums) => `${nums}`
const counts = (num1, num2, ...nums) => {
    return `${num1}, ${num2}, ${nums}`
}

console.log(count(1, 2, 3, 4, 5))
console.log(counts(1, 2, 3, 4, 5))

// spread operators

let arr = [1, 2, 3, 4, 5, 6]

let arr1 = [...arr, 7, 8, 9, 10]
console.log(arr1)

let obj1 = {
    name : "David",
    age : 19,
}

let obj2 = {
    gender : "Male",
    country : "Nigeria"
}

let obj3 = {...obj1, ...obj2}

console.log(obj3)

// destructuring
const myName = "Makinde David Olasunkanmi"
const nameArr = myName.split(' ')

console.log(nameArr)

let [lastName, firstName, middleName] = nameArr

console.log(`${firstName} ${lastName} ${middleName}`)

let {gender, country } = obj3

console.log(`${gender} ${country}`)

let dogName = "Rex"
let breed = "GSD"
let dogAge = 2

dogObj = {
    dogName, breed, dogAge
}
console.log(dogObj)

// Array functions

// Array function - map
let xArr = [5, 4, 3, 2, 1]

let yArr = xArr.map((item) => {
    console.log(item)
    return item * 2
})

console.log(yArr)

const userObj = [
    {
        name : "David Makinde",
        age : 20
    },
    {
        name : "Daniel Makinde",
        age : 22
    },
    {
        name : "David Makinde",
        age : 27
    }
]

let userMap = userObj.map((data, key) => {
    console.log(`key : ${key} : data: ${data.name}`)
})

// Array function - reduce
yArr.reduce((acc, item) =>{
    console.log(item)
    console.log(acc)
},2)

// Array function - filter
zArr = yArr.filter(item => {
    return true
})

console.log(zArr)

// Array function - find and findIndex

fArr = [-1, -2, -3, -4, 0, 1, 2, 3, 4]
rArr = fArr.find(item => {
    return item % 2 === 0 && item >= 1
})

console.log(rArr)

// Class
class Student{
    constructor(matricNum, course) {
        this.matricNum = matricNum
        this.course = course
    }
    getDetails = () => {
        return `Matric Number is ${this.matricNum} and course is ${this.course}`
    }
}
let David = new Student('BCH/2021/131', "Biochemistry")
console.log(David.getDetails())

// Class - Inheritance
class fullStudent extends Student{
    constructor(matricNum, course, hall, level, cgpa) {
        super(matricNum, course)
        this.hall = hall
        this.level = level
        this.cgpa = cgpa

    }
    getAllDetails = ()=> {
        return `Hall is ${this.hall}, Level is ${this.level} Level and CGPA is ${this.cgpa}`
}
}

David = new fullStudent("BCH/2021/131","Biochemistry","ETF", "100", 4.91)
console.log(David.getDetails() + ", " + David.getAllDetails())


*/

// Promises

