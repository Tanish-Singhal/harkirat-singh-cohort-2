// Callback
function sub(a, b) {
  return a - b;
}

function add(a, b) {
  return a + b
}

function result(a, b, callback) {
  return callback(a, b);
}

console.log(result(1, 2, sub));








// Promise
let promiseQues = new Promise((resolve, reject) => {
  console.log("I am a promise");
  resolve("sucess");
  // reject("error");
})


// in general programming
function getData(dataId, getNextData) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          console.log("data", dataId);
          resolve("success");
          // reject("error");
      }, 5000)
  })
}

let finalVal = getData(123);


// how to use the resolve and reject in promise
const getPromise = () => {
  return new Promise((resolve, reject) => {
      console.log("promise");
      resolve("success");
      // reject("error");
  })
}

getPromise().then((res) => {
  console.log("Promise fullfiled", res);
})

getPromise().catch((err) => {
  console.log("Promise rejected", err);
})


// Promise Chain
function asyncFun1() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          console.log("some data 1...");
          resolve("sucess");
      }, 4000);
  })
}

function asyncFun2() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          console.log("some data 2...");
          resolve("sucess");
      }, 4000);
  })
}

console.log("Fetching data 1");
asyncFun1().then((res) => {
  console.log(res);
})

// console.log("Fetching data 2");
// asyncFun2().then((res) => {
//     console.log(res);
// })

// but here we want all the data to be fetched one after the another
console.log("Fetching data 1...");
asyncFun1().then((res) => {
  console.log(res);
  console.log("Fetching data 2... ");
  asyncFun2.then((res) => {
      console.log(res)
  })
})








// Async Await
// it automatically gives a promise by default
function api() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          console.log("weather data");
          resolve(200);
      }, 2000)
  })
}

async function getWeatherData() {
  await api();
}


function getSomeData(dataId) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          console.log("data", dataId);
          resolve("success");
          // reject("error");
      }, 2000)
  })
}

async function getAllData() {
  await getSomeData(1);    
  await getSomeData(2);
  await getSomeData(3);
  await getSomeData(4);
}
getAllData();    // this call has to be defined

// IIFE
// (async function getAllData() {
//     await getSomeData(1);    
//     await getSomeData(2);
//     await getSomeData(3);
//     await getSomeData(4);
// })()