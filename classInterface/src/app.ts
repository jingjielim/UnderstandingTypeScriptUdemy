abstract class Department {
  static fiscalYear = 2020;
  // private id: string;
  // private name: string;
  private employees: string[] = [];

  // short hand initialization. No need to declare the fields and
  // then initialise again in constructor
  constructor(protected readonly id: string, private name: string) {
    // this.id = id;
    // this.name = name;
  }

  static createEmployee(name: string) {
    return { name: name };
  }
  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log("Number of employess: " + this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
  }

  describe(){
    console.log("IT Department - ID: " + this.id);
    
  }
}

class AccountingDepartment extends Department {
  public get reports(): string[] {
    return this._reports;
  }
  public set reports(value: string[]) {
    this._reports = value;
  }
  constructor(id: string, private _reports: string[]) {
    super(id, "Accounting");
  }
  addReports(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }

  describe() {
    console.log("Accounting department - ID: " + this.id);
  }
}

const employee1 = Department.createEmployee("Max");
console.log(employee1, Department.fiscalYear);

let it = new ITDepartment("01", ["Max", "James"]);
it.addEmployee("jingjie");
it.addEmployee("Max");
// Unable to access employees property of accounting anymore
// accounting.employees[2] = "Anna";

console.log(it);

it.describe();
it.printEmployeeInformation();

let accounting = new AccountingDepartment("02", []);
// accounting.addReports("Something went wrong");
// accounting.printReports();
accounting.describe();

// const accountingCopy = { name: "jingjie", describe: accounting.describe };

// accountingCopy.describe();
