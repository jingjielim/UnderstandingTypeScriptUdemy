"use strict";
var Department = /** @class */ (function () {
    function Department(name) {
        this.employees = [];
        this.name = name;
    }
    Department.prototype.describe = function () {
        console.log("Department: " + this.name);
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
var accounting = new Department("accounting");
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