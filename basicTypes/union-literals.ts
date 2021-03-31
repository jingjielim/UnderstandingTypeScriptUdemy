// Union Types

function combine(input1: number | string, input2: number | string, resultConversion: 'as-number' | 'as-text') {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  if (resultConversion === 'as-number') {
      return +result;

  } else {
      return result.toString();
  }
}
const combinedAges = combine(30, 25, 'as-text');
console.log(combinedAges);
const combinedAges2 = combine('30', '25', 'as-number');
console.log(combinedAges2);

const combinedNames = combine("Max", "Lim", 'as-text');
console.log(combinedNames);

// Literal Types
const resultConversion: 'as-number' | 'as-text' = 'as-text';
