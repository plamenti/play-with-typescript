function add(n1: number, n2: number): number {
    return n1 + n2;
}

function printResult(num: number): void {
    console.log("Result: " + num);
}

printResult(add(5, 12));

// Functions as type
let combineValues: (a: number, b: number) => number; // same as declaring an Interface of function
combineValues = add;

console.log(combineValues(5, 4));

// Function with callback as param
function addAndHandle(n1: number, n2: number, cb: (n: number) => void): void {
    const result = n1 + n2;
    cb(result);
}

addAndHandle(2, 2, (param) => {
    console.log("Callback: " + param);
})

const user: {
    f: () => void;
} = {
    f: () => {console.log("plamenti")}
}

user.f();