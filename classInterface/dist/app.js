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
    Department.createEmployee = function (name) {
        return { name: name };
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log("Number of employess: " + this.employees.length);
        console.log(this.employees);
    };
    Department.fiscalYear = 2020;
    return Department;
}());
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, "IT") || this;
        _this.admins = admins;
        return _this;
    }
    ITDepartment.prototype.describe = function () {
        console.log("IT Department - ID: " + this.id);
    };
    return ITDepartment;
}(Department));
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, _reports) {
        var _this = _super.call(this, id, "Accounting") || this;
        _this._reports = _reports;
        return _this;
    }
    Object.defineProperty(AccountingDepartment.prototype, "reports", {
        get: function () {
            return this._reports;
        },
        set: function (value) {
            this._reports = value;
        },
        enumerable: false,
        configurable: true
    });
    AccountingDepartment.prototype.addReports = function (text) {
        this.reports.push(text);
    };
    AccountingDepartment.prototype.printReports = function () {
        console.log(this.reports);
    };
    AccountingDepartment.prototype.describe = function () {
        console.log("Accounting department - ID: " + this.id);
    };
    return AccountingDepartment;
}(Department));
var employee1 = Department.createEmployee("Max");
console.log(employee1, Department.fiscalYear);
var it = new ITDepartment("01", ["Max", "James"]);
it.addEmployee("jingjie");
it.addEmployee("Max");
// Unable to access employees property of accounting anymore
// accounting.employees[2] = "Anna";
console.log(it);
it.describe();
it.printEmployeeInformation();
var accounting = new AccountingDepartment("02", []);
// accounting.addReports("Something went wrong");
// accounting.printReports();
accounting.describe();
// const accountingCopy = { name: "jingjie", describe: accounting.describe };
// accountingCopy.describe();
//# sourceMappingURL=app.js.map