const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]; // this is tuple
} = {
    name: "Plamenti",
    age: 50,
    hobbies: ["Sports", "Programming"],
    role: [48, "dev"]
};

console.log(person.name);
for ( const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

console.log(person.role[0])

const student: {
    id: string;
    age: number;
    name: string;
    interests: string[];
    courses: {
        id: string;
        courseName: string;
    }
} = {
    id: "abc",
    age: 23,
    name: "John",
    interests: ["ML/AI", "Automation"],
    courses: {
        id: "123",
        courseName: "TypeScript"
    }
}