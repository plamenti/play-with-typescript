function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const objA = {name: "Bob"};
const objB = {age: 24};

const objC = merge(objA, objB);
console.log(objC.name);
console.log(objC.age);

function extractKeyValue<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key];
}

console.log(extractKeyValue({name: "Plamen"}, "name"));

class Printer<T> {
    value: T;

    constructor(param: T) {
        this.value = param;
    }

    print(): void {
        console.log(this.value);
    }
}

const numberPrinter = new Printer(5);
numberPrinter.print();
const stringPrinter = new Printer("Plamenti");
stringPrinter.print();