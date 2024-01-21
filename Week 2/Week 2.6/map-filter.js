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