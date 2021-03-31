// Type Aliases
type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  if (resultConversion === "as-number") {
    return +result;
  } else {
    return result.toString();
  }
}

// Function Types
function add(input1: number, input2: number) {
  return input1 + input2;
}

function printResult(num: number): void {
  console.log("Result: " + num);
}
let combineValues: (a: number, b: number) => number;

combineValues = add;
/**
 * printResult function does not fit the Function type declared for
 * combineValues
 */
// combineValues = printResult;

console.log(combineValues(8, 8));

// Callbacks

function addAndHandle(
  input1: number,
  input2: number,
  callback: (result: number) => void
) {
  const result = input1 + input2;
  callback(result);
}

addAndHandle(10, 20, console.log);
