"use strict";
function combine(n1, n2, resultConversion) {
    let result;
    if (typeof n1 === "number" && typeof n2 === "number" || resultConversion === "as-number") {
        result = +n1 + +n2; // alternative way to convert it to number is using parseFloat(n1) + parseFloat(n2)
    }
    else {
        result = n1.toString() + n2.toString();
    }
    return result;
}
const combineAge = combine(2, 4, "as-number");
console.log(combineAge);
const combineName = combine("Ade", "bayo", "as-text");
console.log(combineName);
const combineBothNameAndNumber = combine("20", " 90", "as-number");
console.log(combineBothNameAndNumber);
const asNumber = combine(20, " here", "as-number");
console.log(asNumber);
const asString = combine(20, " here", "as-text");
console.log(asString);
