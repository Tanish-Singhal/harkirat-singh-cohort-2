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

function greeting(person: User) {
  console.log("interface " + person.firstName)
}

greeting({              // email was not there
  firstName: "Tanish",
  lastName: "Singhal",
  age: 20
})


// implementing interfaces
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

// TODO: Types
type User2 = {
  firstName: string;
  lastName: string;
  age: number;
}

function greeting2(person: User2) {
  console.log("types " + person.firstName)
}

greeting({            
  firstName: "Tanish",
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

type Manager2 = {
  name: string;
  department: string;
};

type TeamLead = Employee2 & Manager2;

const teamLead: TeamLead = {
  name: "harkirat",
  startDate: new Date(),
  department: "Software developer"
};


// FIXME: What is the difference between Interfaces and Types (interview question)
// => Interfaces can be extended into class
//    types you can do OR and AND (union and intersection)

console.log("----------------------------------------------------")

// TODO: Arrays
function maxValue(arr: number[]) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
          max = arr[i]
      }
  }
  return max;
}
console.log(maxValue([1, 2, 3]));


console.log("----------------------------------------------------")