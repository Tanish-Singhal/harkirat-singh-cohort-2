// TODO: Callbacks
// function sqaure(n) {
//     return n * n;
// }

const { create } = require("domain");

// function cube(n) {
//     return n * n * n;
// }

// function sumOfSomething(a, b, callbackFn) {
//     let a = callbackFn(a);
//     let b = callbackFn(b);
//     return a + b;
// }

// let ans = sumOfSomething(1, 2, sqaure);
// console.log(ans);

// -----------------------------------------------------------------

// TODO: Asynchronous Function
// function onDone() {
//     console.log("hi there");
// }

// setTimeout(onDone, 2000);           // this is an async call (that's why it run at last)
// console.log("after setTimeout");

// for (let i = 0; i < 10000; i++) {
    
// }
// console.log("after loop");

// ---------------

// const fs = require('fs');

// let a = 1;
// console.log(a);

// fs.readFile("a.txt", "utf-8", function(err, data) {
//     console.log("data read from the file is:");
//     console.log(data);
// });

// let ans = 0;
// for (let i = 0; i < 100; i++) {
//     ans = ans + i;
// }
// console.log(ans);

// -----------------------------------------------------------------

// TODO: Promise
// function myOwnSetTimeout(callback, duration) {
//     setTimeout(function() {
//         callback();
//     }, duration);
// }

// myOwnSetTimeout(function() {
//     console.log("after settimeout");
// }, 1000)


// function promisifiedMyOwnSetTimeout(duration) {
//     const p = new Promise(function(resolve) {
//         setTimeout(function() {
//             resolve();
//         }, duration);
//     });
//     return p;
// }

// const ans = promisifiedMyOwnSetTimeout(1000);
// console.log(ans);
// ans.then(function() {
//     console.log("timeout is done");
// });

// ----------------------------------------------------------------

const cart = ["shoes", "pants", "kurta"];

const promise = createOrder(cart);

promise
.then(function(orderId) {
    console.log(orderId);
    return orderId;
})
.then(function(orderId) {
    return proceedToPayment(orderId);
})
.then(function(paymentInfo) {
    console.log(paymentInfo);
})
.catch(function(err) {
    console.log(err.message);
})

function createOrder(cart) {
    const pr = new Promise(function(resolve, reject) {
        if (!validateCart(cart)) {
            const err = new Error ("Cart is not valid");
            reject(err);
        }

        const orderId = "12345";
        if (orderId) {
            setTimeout(function() {
                resolve(orderId);
            }, 5000);
        }
    });

    return pr;
}

function proceedToPayment(orderId) {
    return new Promise(function(resolve, reject) {
        resolve("Payment Successful")
    })
}

function validateCart(cart) {
    return true;
}

// -----------------------------------------------------------------

// TODO: Async/await syntax
// function tanishAsyncFunction() {
//     let p = new Promise(function(resolve) {
//         // do some async logic here
//         resolve("hi there!");
//     });
//     return p;
// }

// async function main() {
//     const value = await tanishAsyncFunction();
//     console.log(value);
// }

// main();