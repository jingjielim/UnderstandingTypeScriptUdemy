var person = {
    name: "Jing Jie",
    age: 20,
    hobbies: ["sports", "sleeping", 10]
};
console.log(person.name);
// Nested Object Types
var product = {
    id: "abc1",
    price: 12.99,
    tags: ["great-offer", "hot-and-new"],
    details: {
        title: "Red Carpet",
        description: "A great carpet - almost brand-new!"
    }
};
// Array Type
var human = {
    name: "Jing Jie",
    age: 20,
    hobbies: ["sports", "sleeping"],
    role: [2, "author"]
};
var favouriteActivites;
favouriteActivites = ["sports"];
// Tuple Type
// let role: [number, string] = ["sports", "cooking"];
// first element must be a number
// role = [0, "admin", "user"];
// cannot add a third element
// role[1] = 9;
// cannot assign number to string element
// Enum Type
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person1 = {
    role: Role.USER
};
