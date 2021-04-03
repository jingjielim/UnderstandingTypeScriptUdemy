"use strict";
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
//# sourceMappingURL=interfaces.js.map