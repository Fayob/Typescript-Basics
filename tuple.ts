// const person: {
//     name: string;
//     age: number
// } = {
const personA: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]
} =  {
   name: "Fayob",
    age: 30,
    hobbies: ["Sports", "Learning"],
    role: [2, "author"]
}

personA.role.push("admin")
console.log(personA.role);

// person.role[1] = 10 // not allowed in tuple because it want a string as the second value
// person.role = [1, "firstString", "anotherString"] // not allowed in tuple


let favoriteActivity: string[]

favoriteActivity = ["Sports"]
favoriteActivity.push("Writing")

console.log(favoriteActivity);
console.log(personA.name);

for (const hobby of personA.hobbies) {
    console.log(hobby);
    
}
