enum Role {ADMIN, USER, AUTHOR}

const person=  {
   name: "Fayob",
    age: 30,
    hobbies: ["Sports", "Learning"],
    role: Role.ADMIN
}

if (person.role === Role.ADMIN){
    console.log("This person is an admin");
    
}