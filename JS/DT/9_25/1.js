// Task: Transform and Sort an Array of Objects
// You are given an array of person objects, each containing a name and age. Your task is to:
// Filter out all people younger than 18.
// Sort the remaining people by their age in descending order.
// Map the remaining people to an array of strings formatted as "<name> is <age> years old".
// Return the final array of strings.
const people = [
    { name: "Alice", age: 25 },
    { name: "David", age: 16 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 19 },
    { name: "Eve", age: 30 }
];
// //1
// console.log("1. Filter out all people younger than 18.");
// let yage = people.filter(a => a.age < 18)
// yage.forEach(a => console.log(a))

// //2
// console.log("2 Sort the remaining people by their age in descending order.");
// let oldesc = people.filter(a => a.age >= 18).sort((a, b) => b.age - a.age)
// oldesc.forEach(a => console.log(a))

// //3
// console.log("3 Map the remaining people to an array of strings formatted as <name> is <age> years old");
// let rem = oldesc.map((a) => (`${a.name} is ${a.age} years old`))
// console.log(rem);


//result
let result = people.filter(a => a.age >= 18).sort((a, b) => b.age - a.age).map((a) => (`${a.name} is ${a.age} years old`))
console.log(result);
