function add(n1: number, n2: number): number {
    return n1 + n2;
}

function printResult(num: number): void {
    console.log("Result: " + num);
}

printResult(add(5, 12));

// Functions as type
let combineValues: (a: number, b: number) => number; // same as declarin an Interface of function
combineValues = add;

console.log(combineValues(5, 4));