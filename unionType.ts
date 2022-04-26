function combine(n1: number | string , n2: number | string ){
    let result
    if (typeof n1 === "number" && typeof n2 === "number"){
         result = n1 + n2
    } else {
        result = n1.toString() + n2.toString()
    }
    return result
}


const combineAge = combine(2, 4)
console.log(combineAge);

const combineName = combine("Ade", "bayo")
console.log(combineName);

const combineBothNameAndNumber = combine(3, " Here")
console.log(combineBothNameAndNumber);
