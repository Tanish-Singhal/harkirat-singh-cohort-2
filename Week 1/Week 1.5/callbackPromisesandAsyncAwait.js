// Synchronous means tasks are done one at a time
// Asynchronoud means multiple tasks are done at the same time

// common async functions?
// setTimeout
// fs.readFile
// Fetch

// TODO: Asynchronous function

// console.log("hi there");

// setTimeout(function() {
//     console.log("hello 2");
// }, 5000);

// setTimeout(function() {
//     console.log("hello 3");
// }, 2000);

// let a = 0;
// for (let i = 0; i < 10; i++) {
//     a++;
// }
// console.log(a);

// ----------------------------------------------------------------

// const fs = require("fs");

// fs.readFile("a.txt", "utf-8", function(err, data) {
//     console.log(data);
// });

// console.log("hi there");

// let a = 0;
// for (let i = 0; i < 1000000; i++) {
//     a++;
// }
// console.log(a);

// ----------------------------------------------------------------

// TODO: Callback Syntax
// const fs = require("fs");

// function tanishAsyncFunction(callback) {
//     // do some async logic here
//     fs.readFile("a.txt", "utf-8", function(err, data) {
//         callback(data);
//     });
    
// }

// function main() {
//     tanishAsyncFunction(function(value) {
//         console.log(value);
//     });
// }

// main();

// -----------------------------------------------------------------

// FIXME: This is how you can create as asynchronus function of your own which is just a wrapper around the inbuilt function of javascript

// const fs = require("fs");

// function putCopyrightToFile(cb) {
//     fs.readFile("a.txt", "utf-8", function(err, data) {
//         data = data + " copyright 2024 Tanish Singhal";
//         fs.writeFile("a.txt", function() {
//             cb();
//         });
//     });
// }

// putCopyrightToFile(function() {
//     console.log("copyroght has been put");
// });

// -----------------------------------------------------------------

// TODO: Promises
// Promises are the syntatical sugar that make this code slightly more readable
// this is the normal code using callback only
// function findSum(n) {
//     let ans = 0;
//     for (let i = 0; i < n; i++) {
//         ans = ans + i;
//     }
//     return ans;
// }

// function findSumTill100() {
//     return findSum(100);
// }

// setTimeout(findSumTill100, 1000);
// console.log("Hello World");

// -----------------------------------------------

// This is the way by which we can make an asynchronous function of our own
// const fs = require("fs");

// function tanishFile(callback) {
//     fs.readFile("a.txt", "utf-8", function(err, data) {
//         callback(data);
//     });
// }

// function onDone(data) {
//     console.log(data);
// }

// tanishFile(onDone);
// console.log("hello there");

// ----------------compare both the syntax-------------------

// // now what is the syntax of Promise
// const fs = require('fs');

// // myown asynchronous function
// function tanishFile() {
//     return new Promise(function(resolve) {
//         console.log("Inside Promise");
//         fs.readFile("a.txt", "utf-8", function(err, data) {
//             console.log("Before Resolve");
//             resolve(data);
//         });
//     });
// }

// // callback function to call
// function onDone(data) {
//     console.log(data);
// }

// let a = tanishFile();
// console.log(a);
// a.then(onDone);

// ------------------------------------------------------------

// // Quick Promise Recap
// // whenever you create promise, you need to pass in a function as the first argument which has resolve as a first argument
// var d = new Promise(function(resolve) {
//     setTimeout(function() {
//         resolve("Food");
//     }, 1000);
// });

// function callback() {
//     console.log(d);
// }

// console.log(d);
// d.then(callback);           // .then gets called whenever the async function resolves

// ----------------

// function tanishAsyncFunction() {
//     let p = new Promise(function(resolve) {
//         resolve("hi there");
//     });
//     return p;
// }

// const value = tanishAsyncFunction();
// value.then(function(data) {
//     console.log(data);
// });

// FIXME: -------------------Compare--------------------------------

// Simple Function
// function tanishAsyncFunction(callback) {
//     setTimeout(callback, 2000);
// }

// tanishAsyncFunction(function() {
//     console.log("hello");
// });

// ---------------

// Imtimidating Async Function
// function tanishAsyncFunction() {
//     let p = new Promise(function(resolve) {
//         setTimeout(resolve, 2000);
//     });
//     return p;
// }

// const value = tanishAsyncFunction();
// value.then(function() {
//     console.log("hi there");
// })

// ----------------------------------------------------------------

// TODO: async await
// It is also a syntactical sugar. It still uses callbacks/Promises under the hood

// Normal Syntax
// function tanishAsyncFunction() {
//     let p = new Promise(function(resolve) {
//         // do some async logic here
//         setTimeout(function() {
//             resolve("hi there");
//         }, 1000);
//     });
//     return p;
// }

// function main() {
//     tanishAsyncFunction().then(function(value) {
//         console.log(value);
//     });
// }

// main();

// -----------------

// Async/await Syntax
// function tanishAsyncFunction() {
//     let p = new Promise(function(resolve) {
//         // do some async logic here
//         setTimeout(function() {
//             resolve("hi there");
//         }, 1000);
//     });
//     return p;
// }

// // only this part change (get rid of callback and .then syntax)
// async function main() {
//     const value = await tanishAsyncFunction();
//     console.log(value);
// }

// main();

// -----------------------------------------------------------------