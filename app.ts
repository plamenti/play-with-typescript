const person: {
    name: string;
    age: number;
} = {
    name: "Plamenti",
    age: 50
};

console.log(person.name);

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