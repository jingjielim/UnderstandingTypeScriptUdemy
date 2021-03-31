// Union Types
function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    if (resultConversion === 'as-number') {
        return +result;
    }
    else {
        return result.toString();
    }
}
var combinedAges = combine(30, 25, 'as-text');
console.log(combinedAges);
var combinedAges2 = combine('30', '25', 'as-number');
console.log(combinedAges2);
var combinedNames = combine("Max", "Lim", 'as-text');
console.log(combinedNames);
// Literal Types
var resultConversion = 'as-text';
