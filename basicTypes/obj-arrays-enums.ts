const person: {
  name: string;
  age: number;
  hobbies;
} = {
  name: "Jing Jie",
  age: 20,
  hobbies: ["sports", "sleeping", 10],
};

console.log(person.name);

// Nested Object Types
const product: {
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  };
} = {
  id: "abc1",
  price: 12.99,
  tags: ["great-offer", "hot-and-new"],
  details: {
    title: "Red Carpet",
    description: "A great carpet - almost brand-new!",
  },
};

// Array Type

const human = {
  name: "Jing Jie",
  age: 20,
  hobbies: ["sports", "sleeping"], // same type element array.
  role: [2, "author"], // mixed type element array
};

let favouriteActivites: string[];

favouriteActivites = ["sports"];

// Tuple Type

// let role: [number, string] = ["sports", "cooking"];
// first element must be a number
// role = [0, "admin", "user"];
// cannot add a third element
// role[1] = 9;
// cannot assign number to string element

// Enum Type

enum Role {
  ADMIN,
  USER,
  AUTHOR,
}

const person1 = {
  role: Role.USER,
};
