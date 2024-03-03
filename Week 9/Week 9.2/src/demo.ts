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
