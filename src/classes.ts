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

    /*
    Shorthand initialization - this same as the detailed init

    constructor(private readonly name: string) {
    }
    */

    describe(this: EmployeeDepartment): void {
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

const accounting = new EmployeeDepartment("Accounting");
accounting.describe();
accounting.addEmployee("Plamenti");
accounting.addEmployee("Stella");
accounting.printEmployeesInformation();

class ITDepartment extends EmployeeDepartment {
    constructor(name: string, ...admins: string[]) {
        super(name);
        this.addEmployees(...admins);
    }
}

const itDepartment = new ITDepartment("IT Department", "Linux Admin", "MAC Admin", "Win Admin");
itDepartment.describe();
itDepartment.printEmployeesInformation();

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