type Combinable = number | string
type ConversionDescriptor = "as-number" | "as-text"

function combined(n1: Combinable , n2: Combinable, resultConversion: ConversionDescriptor  ){
    let result
    if (typeof n1 === "number" && typeof n2 === "number" || resultConversion==="as-number"){
         result = +n1 + +n2 // alternative way to convert it to number is using parseFloat(n1) + parseFloat(n2)
    } else {
        result = n1.toString() + n2.toString()
    }
    return result
}


const combinesAge = combined(2, 4, "as-number")
console.log(combinesAge);

const combinesName = combined("Ade", "bayo", "as-text")
console.log(combinesName);

const combineNameAndNumber = combined("20", " 90", "as-number")
console.log(combineNameAndNumber);

const asNumber = combined(20, " here", "as-number")
console.log(asNumber);

const asString = combined(20, " here", "as-text")
console.log(asString);
