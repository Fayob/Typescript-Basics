"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: "Fayob",
    age: 30,
    hobbies: ["Sports", "Learning"],
    role: Role.ADMIN
};
if (person.role === Role.ADMIN) {
    console.log("This person is an admin");
}
