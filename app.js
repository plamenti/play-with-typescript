"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result: " + num);
}
printResult(add(5, 12));
// Functions as type
var combineValues; // same as declaring an Interface of function
combineValues = add;
console.log(combineValues(5, 4));
// Function with callback as param
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(2, 2, function (param) {
    console.log("Callback: " + param);
});
var user = {
    f: function () { console.log("plamenti"); }
};
user.f();
