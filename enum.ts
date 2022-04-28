enum Role {ADMIN, USER, AUTHOR}

const per=  {
   name: "Fayob",
    age: 30,
    hobbies: ["Sports", "Learning"],
    role: Role.ADMIN
}

if (per.role === Role.ADMIN){
    console.log("This person is an admin");
    
}