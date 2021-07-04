# Play with typescripts

## Visual Studio Code extensions
1. ESLint
1. Path Intellisense
1. Prettier - Code formatter

## Project Setup
1. `npm init`
1. Install typescript - `npm install --save-dev typescript`
1. Create `index.html`
1. Create `app.ts`
1. Create script to run TypeScript compiler - `"tsc": "tsc"`
1. Install lite-server - `npm install --save-dev lite-server`
1. Create script to start lite-server - `"start-server": "lite-server"`

## Core Types
The core primitive types in TypeScript are all lowercase!
1. number - 1, 5.3, -10
1. string - "Hi", 'Hi'
1. boolean - true, false
1. object - {age: 30}
1. Array - [1, 2, 3] - Any JavaScript array, type can be flexible or strict (regarding the element types)

## TypeScript types
1. Tuples - [number, string]
1. Enum - enum {NEW, OLD}
1. Any - * - Any kind of value, no specific type. TRY TO AVOID USING OF ANY!
1. Union - function combine(input1: number | string, input2: number | string)
1. Literal - someVar: 'someString' - now the someVar could be only string with value 'someString'
1. Type aliases - type Combinable = number | string;

## TypeScript Compiler configuration
1. --watch mode - `tsc app.ts --watch` - will watch for change `app.ts` and will compile if any
1. Compiling the entire project - one time run `tsc --init` and this will create `tsconfig.json` file. now combine with --watch mode.

## Classes and Interfaces
1. Create class
```javascript
class Department {
    private readonly name: string;
    private employees: string[];

    constructor(name: string) {
        this.name = name;
        this.employees = [];
    }

    /*
    Shorthand initialization - this same as the detailed init

    constructor(private readonly name: string) {
    }
    */

    describe(this: Department): void {
        console.log(`Department: ${this.name}`);
    }

    addEmployee(employee: string): void {
        // some validation goes here
        this.employees.push(employee);
    }

    addEmployees(...employees: string[]): void {
        // some validation goes here
        this.employees = [...employees];
    }

    printEmployeesInformation(): void {
        console.log(`Employees count: ${this.employees.length}`);
        this.employees.forEach(e => {
            console.log(`Employee: ${e}`);
        });
    }
}
```
2. `describe(this: Department): void` - this means that the calling of method `describe` will be applied allways on the object of `class Department`. The method doesn't take parameters.
3. Create an object of the class
```javascript
const accounting = new Department("Accounting");
accounting.describe();
accounting.addEmployee("Plamenti");
accounting.addEmployee("Stella");
accounting.printEmployeesInformation();
```
4. Fields modifiers - `private`, `readonly`
5. Inheritence - protected fields are accessible from child class, private are accessible only in the class
```javascript
class ITDepartment extends Department {
    constructor(name: string, ...admins: string[]) {
        super(name);
        this.addEmployees(...admins);
    }
}

const itDepartment = new ITDepartment("IT Department", "Linux Admin", "MAC Admin", "Win Admin");
itDepartment.describe();
itDepartment.printEmployeesInformation();
```
6. Getters, Setters
```javascript
get getterName() {
    ...
    getter logic
    ...
}

// call the getter without adding () at the end, call like a property
objName.getterName;

set setterName(value: type) {
    ...
    setter logic
    ...
}

// call the setter without adding () at the end, call like a property
objName.setterName = value;
```
7. Static methods and properties - methods and properties that will be accessible directly on Class, not on concrete class object. Can not be used with `this` kayword, should be used with class name.
```javascript
static methodName(): void {
    ...
    static method logic
    ...
}

// call directly with class
ClassName.methodName();
```
8. Abstract class - should be notated with `abstract` keyword, can contains `abstract` methods.
```javascript
abstract class Department {
    abstract describe(this: Department): void;
}

class EmployeeDepartment extends Department {
    private readonly name: string;
    private employees: string[];

    constructor(name: string) {
        super();
        this.name = name;
        this.employees = [];
    }

    describe(this: EmployeeDepartment): void {
        console.log(`Department: ${this.name}`);
    }

    .
    .
    .
}
```
9. Singletons and Private Constructors - when we need to ensure that we have only one instance of a class. Put `private` keyword in front of `construct`. The instantiation happens by using a static method.
```javascript
class MySingleton {
    private static instance: MySingleton;

    private constructor() {

    }

    static getInstance() {
        if (this.instance) {
            return this.instance;
        }

        this.instance = new MySingleton();
        return this.instance;
    }

    greet(): void {
        console.log("Greeting from singleton class!")
    }
}

const mySingletonObj = MySingleton.getInstance();
mySingletonObj.greet();
```
10. Interfaces - the interface describe the structure of an object, its behaviour by describing its API (properties and methods withoud adding to them values or implementations). Every object that implements this interface should provide its own implementation of the properties and methods. The interface is a contract between it and the class that implements it. Interfaces could be used as a type of variable. The properties in the interface could be `readonly` - the will be initialized only once and after that could not be changed.
```javascript
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
```
11. Interfaces could extend another interface/s (one or more).
```javascript
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
```

12. Interfaces could be used as `Function Types`.
```javascript
// Interfaces as Function Types
interface AddFn {
    (a: number, b: number): number;
}

let add: AddFn;
add = (n1: number, n2: number) => {
    return n1 + n2;
}

console.log(add(4, 5));
```
13. Optional properties in interfaces - this tell that teh property might exist but it could be optional. This is done by puttong `?` at the end of the propety.
```javascript
interface Optionable {
    name?: string;
}

class ImplementsOpt implements Optionable {
    // no errors if there is no name propery declared
    name?: string;

    constructor(name?: string) {
        if(name) {
            this.name = name;
        } else {
            this.name = "John";
        }
    }
}
```

## Advanced types
1. Function overloads
```javascript
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string {
    if(typeof a === "string" && typeof b === "string") {
        return a.toString() + b.toString();
    }

    return a + b;
}
```
2. Optional Chaining - immediately stop running if some expressions is a null or undefined. The ?. operator - when the value? is defined, it will be computed; but when value? is null or undefined, stop w just return undefined.
```javascript
let x = foo?.bar(); // bar() will be executed only if foo is not null or undefined
```
3. Nullish Coalescing
The ?? operator - “fall back” to a default value when dealing with null or undefined. Next peace of code means that the value foo will be used when it’s “present”; but when it’s null or undefined, calculate bar() in its place.
```javascript
let x = foo ?? bar();
```
## Generics
### Generic functions
1. Set the type placeholder inside angle brackets <>
The concrete type will be inferenced.
```javascript
function merge<T, U>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const objA = {name: "Bob"};
const objB = {age: 24};

const objC = merge(objA, objB);
console.log(objC.name);
console.log(objC.age);
```
2. Constraint the generics - for example generic types should extend `object`. The constraint type could be eny type - custom, union etc.
```javascript
function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}
.
.
.
```
3. The `keyof` constrain - to ensure that the parameter is a key of an object and this objects constais such key.
```javascript
function extractKeyValue<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key];
}

console.log(extractKeyValue({name: "Plamen"}, "name"));
```
### Generic classes

```javascript
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
```
Gneric Utility Types - [Documentation](https://www.typescriptlang.org/docs/handbook/utility-types.html)
