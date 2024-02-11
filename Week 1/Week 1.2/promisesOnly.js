// const users1 = {
//     firstname: "Tanish",
//     gender: "male"
// };

// console.log(users1["gender"]);


// console.log("");


const allUsers = [{
    firstname: "Sandeep",
    gender: "male"
}, {
    firstname: "Pratyush",
    gender: "male",
    metadata: {
        age: 21,
        address: "xyz"
    }
}, {
    firstname: "Neelam",
    gender: "female"
}];

for (let i = 0; i < allUsers.length; i++) {
    if (allUsers[i]["metadata"] && allUsers[i]["metadata"]["age"] == 21) {
        console.log(allUsers[i]["firstname"]);
    }
}


// console.log("");



// function sum(a , b) {
//     let result = a + b;
//     return result;
// }

// console.log(sum(1, 2));


// console.log("");


// Callback Function

// function log1() {
//     console.log("Hello World 1");
// }

// function log2() {
//     console.log("Hello World 2");
// }

// function logWhatPresent(fn) {
//     fn();
// }

// logWhatPresent(log2);


// function square(n) {
//     return n*n;
// }

// function cube(n) {
//     return n*n*n;
// }

// function sumOfSqaure(a, b) {
//     let val1 = square(a);
//     let val2 = square(b);

//     return val1 + val2;
// }

// function sumOfCubes(a, b) {
//     let val1 = cube(a);
//     let val2 = cube(b);

//     return val1 + val2;
// }

// console.log(sumOfSqaure(1, 2));
// console.log(sumOfCubes(2, 2));

// function square(n) {
//     return n*n;
// }

// function cube(n) {
//     return n*n*n;
// }

// function sumOfSomething(a, b, fn) {
//     let val1 = fn(a);
//     let val2 = fn(b);

//     return val1 + val2;
// }

// console.log(sumOfSomething(2, 2, cube));


// function sum(num1, num2, fnToCall) {
//     let result = num1 + num2;
//     fnToCall(result);
// }

// function displayResult(data) {
//     console.log("Result of the sum is: " + data);
// }

// function displayResultPAssive(data) {
//     console.log("Sum's result is: " + data);
// }

// // You are only allowed to call one function after this
// // how will you displayResult of a sum
// const ans = sum(1, 2, displayResult);


// console.log("");


// setTimeout
// function greet() {
//     console.log("Namaste Duniya!");
// }

// // setTimeout(greet, 3*1000);
// setInterval(greet, 3*1000);


// console.log("");


// function calculateArithmetic(a, b, arithmeticFinalFunction) {
//     const ans = arithmeticFinalFunction(a, b);
//     return ans;
// }

// function sum(a, b) {
//     return a + b;
// }

// const value = calculateArithmetic(1, 2, sum);
// console.log(value);


// console.log("");


// function timer() {
//     for (let i = 30; i >= 0; i--) {
//         console.log(i);
//     }
// }
// setInterval(timer, 1 * 1000);