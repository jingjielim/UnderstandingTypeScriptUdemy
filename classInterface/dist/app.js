"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
        console.log("Number of employess: " + this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, "IT") || this;
        _this.admins = admins;
        return _this;
    }
    return ITDepartment;
}(Department));
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, "Accounting") || this;
        _this.reports = reports;
        return _this;
    }
    AccountingDepartment.prototype.addReports = function (text) {
        this.reports.push(text);
    };
    AccountingDepartment.prototype.printReports = function () {
        console.log(this.reports);
    };
    return AccountingDepartment;
}(Department));
var it = new ITDepartment("01", ["Max", "James"]);
it.addEmployee("jingjie");
it.addEmployee("Max");
// Unable to access employees property of accounting anymore
// accounting.employees[2] = "Anna";
console.log(it);
it.describe();
it.printEmployeeInformation();
var accounting = new AccountingDepartment("02", []);
accounting.addReports("Something went wrong");
accounting.printReports();
// const accountingCopy = { name: "jingjie", describe: accounting.describe };
// accountingCopy.describe();
//# sourceMappingURL=app.js.map