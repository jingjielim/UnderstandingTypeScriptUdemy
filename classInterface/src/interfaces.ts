// Interface can also be used as a function type if we do not declare a method name.
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (num1: number, num2: number) => {
  return num1 + num2;
};

// Add a ? after a parameter/property name to indicate an optional parameter/property
interface Named {
  readonly name?: string;
  outputName?: string;
}

// Interface can extend from one or more other interfaces
interface Greetable extends Named {
  greet(phrase: string): void;
}

// A class can only extend from one other class but can implement multiple interfaces
class Person implements Greetable {
  name?: string
  age = 30;

  constructor(name?: string) {
    if (name){
      this.name = name;
    }
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}
let user1: Greetable;

user1 = new Person();

user1.greet("Hi there, I am");
// Unable to reassign name as it is a readonly property
// user1.name = "Hazel";
