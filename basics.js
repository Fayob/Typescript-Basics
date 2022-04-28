"use strict";
function add(n1, n2, showResult, phrase) {
    let outcome = n1 + n2;
    if (showResult) {
        return phrase + outcome;
    }
    else {
        console.log("Show Result is false here");
    }
}
const number1 = 5;
const number2 = 15;
const printResult = true;
const phraseResult = "The Result is: ";
const result = add(number1, number2, printResult, phraseResult);
console.log(result);
