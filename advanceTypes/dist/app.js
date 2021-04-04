"use strict";
var e1 = {
    name: "JingJie",
    privileges: ["'create-server"],
    startDate: new Date(),
};
console.log(e1);
// Type guarding using typeof
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInfo(emp) {
    console.log("name: " + emp.name);
    if ("privileges" in emp) {
        console.log("privileges: " + emp.privileges);
    }
    if ("startDate" in emp) {
        console.log("Start Date is: " + emp.startDate);
    }
}
printEmployeeInfo(e1);
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("Driving...");
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log("Driving a truck....");
    };
    Truck.prototype.loadCargo = function (amt) {
        console.log("Loading cargo... " + amt);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(10);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    switch (animal.type) {
        case "bird":
            console.log("Moving with speed: " + animal.flyingSpeed);
            break;
        case "horse":
            console.log("Moving with speed: " + animal.runningSpeed);
            break;
        default:
            break;
    }
}
moveAnimal({ type: "bird", flyingSpeed: 10 });
