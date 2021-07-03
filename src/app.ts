interface Greetable {
    name: string;

    greet(phrase: string): void;
}

let user1: Greetable;

user1 = {
    name: "Plamenti",
    greet(phrase: string): void {
        console.log(`${phrase} ${this.name}!`);
    }
}

user1.greet("Hi");

class Student implements Greetable {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(phrase: string): void {
        console.log(`${phrase} ${this.name}!`);
    }
}

const student1 = new Student("Stallion", 28);
student1.greet("Hi student");

let student2: Greetable;
student2 = new Student("Bunny", 22);
student2.greet("Hi student");

// extending interface
interface Breathable {
    breath(): void;
}

interface Walkable extends Breathable {
    walk(): void;
}

class Walker implements Walkable {
    breath(): void {
        console.log("Breathing...")
    }

    walk(): void {
        console.log("Walking...")
    }
}

// Interfaces as Function Types
interface AddFn {
    (a: number, b: number): number;
}

let add: AddFn;
add = (n1: number, n2: number) => {
    return n1 + n2;
}

console.log(add(4, 5));

interface Optionable {
    name?: string;
}

class ImplementsOpt implements Optionable {
    // no errors if there is no name propery declared
    name?: string;

    constructor(name?: string) {
        if(name) {
            this.name = name;
        }
    }
}