const person: {
    name: string;
    age: number;
    hobbies: string[];
} = {
    name: "Plamenti",
    age: 50,
    hobbies: ["Sports", "Programming"]
};

console.log(person.name);
for ( const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

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