class Department {
  // private id: string;
  // private name: string;
  private employees: string[] = [];

  // short hand initialization. No need to declare the fields and
  // then initialise again in constructor
  constructor(private readonly id: string, private name: string) {
    // this.id = id;
    // this.name = name;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

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
}

let it = new ITDepartment("01", ["Max", "James"]);
it.addEmployee("jingjie");
it.addEmployee("Max");
// Unable to access employees property of accounting anymore
// accounting.employees[2] = "Anna";

console.log(it);

it.describe();
it.printEmployeeInformation();

let accounting = new AccountingDepartment("02", []);
accounting.addReports("Something went wrong");
accounting.printReports();

// const accountingCopy = { name: "jingjie", describe: accounting.describe };

// accountingCopy.describe();
