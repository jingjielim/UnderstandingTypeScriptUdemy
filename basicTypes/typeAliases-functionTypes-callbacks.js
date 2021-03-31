function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    if (resultConversion === "as-number") {
        return +result;
    }
    else {
        return result.toString();
    }
}
// Function Types
function add(input1, input2) {
    return input1 + input2;
}
function printResult(num) {
    console.log("Result: " + num);
}
var combineValues;
combineValues = add;
/**
 * printResult function does not fit the Function type declared for
 * combineValues
 */
// combineValues = printResult;
console.log(combineValues(8, 8));
// Callbacks
function addAndHandle(input1, input2, callback) {
    var result = input1 + input2;
    callback(result);
}
addAndHandle(10, 20, console.log);
