"use strict";
var Department = /** @class */ (function () {
    // short hand initialization. No need to declare the fields and 
    // then initialise again in constructor
    function Department(id, name) {
        this.id = id;
        this.name = name;
        // private id: string;
        // private name: string;
        this.employees = [];
        // this.id = id;
        // this.name = name;
    }
    Department.prototype.describe = function () {
        console.log("Department (" + this.id + "): " + this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
var accounting = new Department("01", "accounting");
accounting.addEmployee("jingjie");
accounting.addEmployee("Max");
// Unable to access employees property of accounting anymore
// accounting.employees[2] = "Anna";
console.log(accounting);
accounting.describe();
accounting.printEmployeeInformation();
// const accountingCopy = { name: "jingjie", describe: accounting.describe };
// accountingCopy.describe();
//# sourceMappingURL=app.js.map