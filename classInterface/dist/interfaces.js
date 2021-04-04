"use strict";
var add;
add = function (num1, num2) {
    return num1 + num2;
};
// A class can only extend from one other class but can implement multiple interfaces
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
        this.age = 30;
    }
    Person.prototype.greet = function (phrase) {
        console.log(phrase + " " + this.name);
    };
    return Person;
}());
var user1;
user1 = new Person("Jing Jie");
user1.greet("Hi there, I am");
// Unable to reassign name as it is a readonly property
// user1.name = "Hazel";
//# sourceMappingURL=interfaces.js.map