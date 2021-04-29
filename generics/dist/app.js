"use strict";
const names = [];
const promise = new Promise((res, rej) => {
    setTimeout(() => {
        res("this is done!");
    }, 2000);
});
promise.then((data) => {
    console.log(data);
});
// Creating a generic function
function merge(a, b) {
    return Object.assign(a, b);
}
const mergedObj = merge({ name: "max" }, 20);
console.log(mergedObj);
// Adding constraints
// Use the keyword "extends" to constrain generic types
function merge2(a, b) {
    return Object.assign(a, b);
}
const mergedObj2 = merge2({ name: "max" }, { age: 20 });
console.log(mergedObj2);
function countAndPrint(element) {
    let descriptionText = "Got no value";
    if (element.length === 1) {
        ("Got 1 element");
    }
    else if (element.length > 1) {
        descriptionText = "Got " + element.length + " element";
    }
    return [element, descriptionText];
}
console.log(countAndPrint(["sports", "eating"]));
// Using the "keyof" constraint
// U must now be a key in the T object
function extractAndConvert(obj, key) {
    return "Value: " + obj[key];
}
console.log(extractAndConvert({ name: "James" }, "name"));
// Generic Class
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return this.data;
    }
}
const textStorage = new DataStorage();
textStorage.addItem("Jing Jie");
textStorage.addItem("25");
textStorage.addItem("Jasper");
textStorage.removeItem("25");
console.log(textStorage.getItems());
const numStorage = new DataStorage();
numStorage.addItem(20);
numStorage.addItem(550);
numStorage.addItem(40);
numStorage.removeItem(20);
console.log(numStorage.getItems());
function createCourseGoal(title, description, completeUntil) {
    // Using Partial built-in utility type to make all the fields in CourseGoal optional
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = completeUntil;
    return courseGoal;
}
// Using Readonly built-in utility type to ensure you cannot edit the array
const people = ["Max", " Anna"];
// people.push("Manu"); // error when trying to return
