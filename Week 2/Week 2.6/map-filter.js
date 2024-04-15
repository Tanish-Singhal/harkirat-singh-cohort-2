// TODO: Arrow Functions
// function sum(a, b) {
//     return a + b;
// }

const sum = (a, b) => {
    return a + b;
}

const n = sum(1, 2) 
console.log(n);

// -----------------------------------------------------------------

// TODO: Map
const input = [1, 2, 3, 4, 5];

function transform(i) {
    return i * 2;
}

const ans = input.map(transform);
console.log(ans);

// -----------------------------------------------------------------

// TODO: Filter
const arr = [1, 2, 3, 4, 5];

function filterLogic(n) {
    if (n % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}

const output = arr.filter(filterLogic);
console.log(output);

// -----------------------------------------------------------------

// FIXME: Suppose you have to filter some number and then double the rest of the number

let array = [1, 2, 3, 4, 5, 6, 7, 8];

let filterArr = array.filter(a => a % 2 == 0);
let mapArr = filterArr.map(a => a * 2);
console.log(mapArr);