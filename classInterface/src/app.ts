class Department {
  private name: string;
  private employees: string[] = [];

  constructor(name: string) {
    this.name = name;
  }

  describe(this: Department) {
    console.log("Department: " + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

let accounting = new Department("accounting");
accounting.addEmployee("jingjie");
accounting.addEmployee("Max");
// Unable to access employees property of accounting anymore
// accounting.employees[2] = "Anna";

console.log(accounting);

accounting.describe();
accounting.printEmployeeInformation();

// const accountingCopy = { name: "jingjie", describe: accounting.describe };

// accountingCopy.describe();
