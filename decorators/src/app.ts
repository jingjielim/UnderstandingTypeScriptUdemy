// A First Class decorator
// function Logger(constructor: Function) {
//   console.log("Logging...");
//   console.log(constructor);
  
// }

// @Logger
// class Person {
//   name = "Jing Jie";
//   constructor() {
//     console.log("Creating person object...");
//   }
// }

// const pers = new Person();

// console.log(pers);

// Decorator factory

function Logger(logString: string) {
  return function(constructor: Function){
    console.log(logString);
    console.log(constructor);
  }
  
}

@Logger("LOGGING-PERSON")
class Person {
  name = "Jing Jie";
  constructor() {
    console.log("Creating person object...");
  }
}

const pers = new Person();

console.log(pers);