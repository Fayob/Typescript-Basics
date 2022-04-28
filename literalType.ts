function combines(n1: number | string , n2: number | string, resultConversion: "as-number" | "as-text" ){
    let result
    if (typeof n1 === "number" && typeof n2 === "number" || resultConversion==="as-number"){
         result = +n1 + +n2 // alternative way to convert it to number is using parseFloat(n1) + parseFloat(n2)
    } else {
        result = n1.toString() + n2.toString()
    }
    return result
}


const combineAges = combines(2, 4, "as-number")
console.log(combineAges);


const combineNames = combines("Ade", "bayo", "as-text")
console.log(combineNames);

const combineBothNameAndNumbers = combines("20", " 90", "as-number")
console.log(combineBothNameAndNumbers);

const asNum = combines(20, " here", "as-number")
console.log(asNum);

const asStrings = combines(20, " here", "as-text")
console.log(asStrings);
