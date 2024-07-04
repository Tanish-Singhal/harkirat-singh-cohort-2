let x: number = 1;
console.log(x);


function greet(firstName: string) {
  console.log("Hello " + firstName);
}
greet("Tanish");


function sum(a: number, b: number): number {
  return a + b;
}
console.log(sum(2, 3));


function isLegal(age: number) {
  if (age > 18) {
    return true;
  } else {
    return false
  }
}
console.log(isLegal(2));


// arguments => nothing was returned
function delayedCall(fn: () => void) {
  setTimeout(fn, 1000);
}
delayedCall(function() {
  console.log("hi there");
})


console.log("----------------------------------------------------")

// TODO: interfaces
interface User {
  firstName: string;
  lastName: string;
  age: number;
  email?: string;      // user can pass if they want otherwise not
}

function isLegal2(person: User) {
  if (person.age > 18) {
    return true;
  }
  else {
    return false;
  }
}

isLegal2 ({
  firstName: "Pratyush",
  lastName: "Singhal",
  age: 56
})

function greeting(person: User) {
  console.log("hi there " + person.firstName)
}

greeting({              // email was not there
  firstName: "Tanish",
  lastName: "Singhal",
  age: 20
})

// Implementing interfaces
interface Person {
  name: string;
  age: number;
  greet(phrase: string): void
}
class Employee implements Person {
  name: string;
  age: number;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }

  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  }
}

const e = new Employee("Tanish", 20);
console.log(e.name);


console.log("----------------------------------------------------")

// Types
type User2 = {
  firstName: string;
  lastName: string;
  age: number;
}

function greeting2(person: User2) {
  console.log("types " + person.firstName)
}

greeting2({            
  firstName: "Ram",
  lastName: "Singhal",
  age: 20
})


// Unions
type StringOrNumber = string | number;

function printId(id: StringOrNumber) {
  console.log(`ID: ${id}`);
}

printId(101);
printId("202");


// Intersection
type Employee2 = {
  name: string;
  startDate: Date;
};

interface Manager2 {
  name: string;
  department: string;
};

type TeamLead = Employee2 & Manager2;

const teamLead: TeamLead = {
  name: "harkirat",
  startDate: new Date(),
  department: "Software developer"
};
console.log(teamLead);


// FIXME: What is the difference between Interfaces and Types (interview question)
// => Interfaces can be extended into class
//    types you can do OR and AND (union and intersection)


console.log("----------------------------------------------------")

// TODO: Arrays
type numberArray = number[];

function maxValue(arr: numberArray) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }
  return max;
}
console.log(maxValue([1, 2, 3]));


interface User {
	firstName: string;
	lastName: string;
	age: number;
}

function filteredUsers(users: User[]) {
  return users.filter(x => x.age >= 18);
}

console.log(filteredUsers([
  {
    firstName: "Rahul",
    lastName: "Singh",
    age: 21
  },
  {
    firstName: "Raman",
    lastName: "Singh",
    age: 16
  },
  {
    firstName: "Sharan",
    lastName: "Singh",
    age: 25
  }
]));

// Problem in Array:
// 1. what if we pass maxValue([1, 2, 3, "tanish"])
// 2. maxValue.toupperCase()
// These problem can be solved by Generics


console.log("----------------------------------------------------")

// TODO: Enums
// It is something you use, when you know there are limited set of inputs to a specific function and they are some constant values which you define in the enum only (here we have up, down, left, right)

enum Direction {
  Up = "up", // 0
  Down = "down", // 1
  Left = "left", // 2
  Right = "right" // 3
}

function doSomething(keyPressed: Direction) {
  if (keyPressed == Direction.Up) {
    // do something
  }
  // ...
}

doSomething(Direction.Up);
doSomething(Direction.Down);
console.log(Direction.Left);
console.log(Direction.Right);


// common use cases of enums
enum ResponseStatus {
  Success = 200,
  NotFound = 404,
  Error = 500
}

// app.get("/", (req, res) => {
//   if (!req.query,userId) {
//     res.status(ResponseStatus.Error).json({});
//   }
//   // and so on...
//   res.send(ResponseStatus.Success).json({});
// })


console.log("----------------------------------------------------")

// TODO: Generics (In this we can solve the problem which happen in the Array part)
// here T represents, arg will be represent by any type of data, you tell me while giving the input that which type of data you are giving

function identity<T>(arg: T) {
  return arg;
}

let output1 = identity<string>("myString");
let output2 = identity<number>(123);



function firstEle<T>(arr: T[]) {
  return arr[0]; 
}

const value = firstEle<string>(["tanish", "singhal"]);
const value2 = firstEle<number>([1, 2, 3]);
const value3 = firstEle<boolean>([true, false]);
console.log(value.toUpperCase());


console.log("----------------------------------------------------")

// TODO: import and export in express
// import :- import express from "express";
// export :- export const a = 1;

// check import and export file

// to install express in typescript command :- 
// npm i express @types/express 
