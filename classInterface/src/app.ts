class Department {
  // private id: string;
  // private name: string;
  private employees: string[] = [];

  // short hand initialization. No need to declare the fields and 
  // then initialise again in constructor
  constructor(private id: string, private name: string) {
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
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

let accounting = new Department("01",  "accounting");
accounting.addEmployee("jingjie");
accounting.addEmployee("Max");
// Unable to access employees property of accounting anymore
// accounting.employees[2] = "Anna";

console.log(accounting);

accounting.describe();
accounting.printEmployeeInformation();

// const accountingCopy = { name: "jingjie", describe: accounting.describe };

// accountingCopy.describe();
