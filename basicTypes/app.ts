const person: {
  name: string;
  age: number;
} = {
  name: "Jing Jie",
  age: 20,
};

console.log(person.name);

// Nested Object Types
const product: {
  id: string;
  price: number;
  tags: string[],
  details: {
    title: string;
    description: string;
  }
} = {
  id: 'abc1',
  price: 12.99,
  tags: ['great-offer', 'hot-and-new'],
  details: {
    title: 'Red Carpet',
    description: 'A great carpet - almost brand-new!'
  }
}
