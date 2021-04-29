const names: Array<string> = [];

const promise: Promise<string> = new Promise((res, rej) => {
  setTimeout(() => {
    res("this is done!");
  }, 2000);
});

promise.then((data) => {
  console.log(data);
});

// Creating a generic function

function merge<T, U>(a: T, b: U) {
  return Object.assign(a, b);
}

const mergedObj = merge({ name: "max" }, 20);
console.log(mergedObj);

// Adding constraints
// Use the keyword "extends" to constrain generic types

function merge2<T extends object, U extends object>(a: T, b: U) {
  return Object.assign(a, b);
}

const mergedObj2 = merge2({ name: "max" }, { age: 20 });
console.log(mergedObj2);

// Another generic function
interface Lengthy {
  length: number;
}
function countAndPrint<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value";
  if (element.length === 1) {
    ("Got 1 element");
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " element";
  }
  return [element, descriptionText];
}
console.log(countAndPrint(["sports", "eating"]));

// Using the "keyof" constraint
// U must now be a key in the T object
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}
console.log(extractAndConvert({ name: "James" }, "name"));


// Generic Class
class DataStorage<T>{
  private data: T[] = [];

  addItem(item: T){
    this.data.push(item);
  }

  removeItem(item: T){
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems(){
    return this.data;
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Jing Jie")
textStorage.addItem("25")
textStorage.addItem("Jasper")
textStorage.removeItem("25")
console.log(textStorage.getItems());

const numStorage = new DataStorage<number>()
numStorage.addItem(20)
numStorage.addItem(550)
numStorage.addItem(40)
numStorage.removeItem(20)
console.log(numStorage.getItems());
