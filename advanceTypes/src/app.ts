type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "JingJie",
  privileges: ["'create-server"],
  startDate: new Date(),
};

// interface ElevatedEmployee extends Admin, Employee{}

type Combinable = string | number;
type Numeric = number | boolean;
// Universal must be a number as that is the intersection between Combinable and Numeric
type Universal = Combinable & Numeric;

console.log(e1);
