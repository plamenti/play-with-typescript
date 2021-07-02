"use strict";
// Union
function combine(input1, input2) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedAges = combine(20, 42);
console.log(combinedAges);
var combinedNames = combine("Max", "Anna");
console.log(combinedNames);
function greet(user) {
    console.log("Hi, " + user.name);
    console.log("Are you realy " + user.age + " years old?");
}
var user = { name: "Plamenti", age: 48 };
greet(user);
