function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return n1 + n2;
    }
    return n1 + n2;
}
var num1 = 5;
var num2 = 3;
var showResult = true;
var phrase = "Result is: ";
add(num1, num2, showResult, phrase);
