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

// Type guarding using typeof
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

// Type guarding in TS
type UnknownEmployee = Employee | Admin;

function printEmployeeInfo(emp: UnknownEmployee) {
  console.log("name: " + emp.name);
  if ("privileges" in emp) {
    console.log("privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start Date is: " + emp.startDate);
  }
}

printEmployeeInfo(e1);

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck....");
  }
  loadCargo(amt: number) {
    console.log("Loading cargo... " + amt);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(10);
  }
}

useVehicle(v1);
useVehicle(v2);

// Discriminated Unions
// Use a property that you know exists to discriminate between different types
interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
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
