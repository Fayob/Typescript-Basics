function add(n1: number, n2: number, showResult: boolean, phrase: string ){
    let outcome = n1 + n2
    if (showResult){
        return phrase + outcome;
         
    } else {
        console.log("Show Result is false here");
        
    }
}
 
const number1 = 5
const number2 = 15
const printRes = true
const phraseResult = "The Result is: "

const result = add(number1, number2, printRes, phraseResult)
console.log(result);


