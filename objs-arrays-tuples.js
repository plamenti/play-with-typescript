"use strict";
var Status;
(function (Status) {
    Status[Status["ACTIVE"] = 0] = "ACTIVE";
    Status[Status["NOT_ACTIVE"] = 1] = "NOT_ACTIVE";
})(Status || (Status = {}));
var person = {
    name: "Plamenti",
    age: 50,
    hobbies: ["Sports", "Programming"],
    role: [48, "dev"],
    status: Status.ACTIVE
};
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
console.log(person.role[0]);
var student = {
    id: "abc",
    age: 23,
    name: "John",
    interests: ["ML/AI", "Automation"],
    courses: {
        id: "123",
        courseName: "TypeScript"
    }
};
