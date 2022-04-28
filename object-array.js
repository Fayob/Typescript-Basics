"use strict";
// const person: {
//     name: string;
//     age: number
// } = {
const person = {
    name: "Fayob",
    age: 30,
    hobbies: ["Sports", "Learning"],
};
let favoriteActivity;
favoriteActivity = ["Sports"];
favoriteActivity.push("Writing");
console.log(favoriteActivity);
console.log(favoriteActivity[3]);
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby);
}
