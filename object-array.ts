// const person: {
//     name: string;
//     age: number
// } = {
    const persons =  {
       name: "Fayob",
        age: 30,
        hobbies: ["Sports", "Learning"],
    }
    
    let favoriteActivities: string[]
    
    favoriteActivities = ["Sports"]
    favoriteActivities.push("Writing")
    
    console.log(favoriteActivities);
    console.log(favoriteActivities[3]);
    console.log(persons.name);
    
    for (const hobby of persons.hobbies) {
        console.log(hobby);
        
    }
    