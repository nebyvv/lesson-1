const obj1 = {};
console.log("obj1",obj1);

const obj2 = new Object();

console.log("obj2", obj2);

obj1.name = "Ayan";
obj1["surname"] = "Aliyeva";
obj1["accommodation-address"] = "Street 1";
console.log("obj1",obj1);

console.log("Name", obj1.name);
console.log("Address", obj1["accommodation-address"]);

delete obj1.surname;

console.log("obj1",obj1);

const user = {
    name: 'Some Name',
    surname: 'Some surname',
    address:{}
}







// Nasledovaniye

const animal = {
    eats: true,
};

const rabbit = Object.create(animal);
rabbit.name = "Some";
console.log("rabbit",rabbit);


// Object Copy

const user1 = {
    name: "Name",
    address:{},
};
const user2 = user1;
console.log("user1",user1);
console.log("user2",user2);

// Spread
const user3 = {...user1};
user1.name = "Second";
console.log("user3",user3);

// Object.assaign
const person1 = {
    name: "Name",
    age: 28,
};
const person2 = {};
Object.assign(person2,person1);

// Lodash


// structureClone
const deepClonedPerson2 = structuredClone(person1);
console.log("deepClonedPerson2",deepClonedPerson2);

//// String
const string = "Hello my, dear Friend!  ";
console.log("length",string.length);
console.log("length",string.toUpperCase());
console.log("length", string.toLowerCase());
console.log("split into array ",string.split(","));
console.log("includes", string.includes("Friend"));
console.log("includes", string.includes("Friendss"));
console.log("indexOf", string.indexOf("my"));
console.log("trim", string.trimStart());
console.log("trim", string.trimEnd());
console.log("trim",string.trim());

//Math object
console.log(Math.floor(3.15));
console.log(Math.ceil(3.15));
console.log(Math.round(3.15));
console.log(Math.pow(3,2));
console.log(Math.sqrt(64));

// Date

const newDate = new Date();
console.log(newDate.getDay());
console.log(newDate.getHours());
console.log(newDate.getDate());
console.log(newDate.getFullYear());
console.log(newDate.getMonth());
console.log(newDate.getUTCDate());
console.log("New date: ",newDate);

const time = Date.now();
console.log("time",time);



