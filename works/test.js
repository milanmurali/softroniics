// for (let i = 0; i <= 5; i++) {
//         setTimeout(() => {
//             console.log(x);

//         }, 1000)



// }

// function outer(){
//     var a =10;
//     function inner(){

//         var b = 20;
//         console.log(a,b);


//     }
//     return inner
// }

// let outer1 = outer()()


// Sum(1)(2)(4)(5)
// console.log("www");




// const person ={
//     name: "John",
//     age: 30,
//     occupation: "Software Engineer",
//     person1:{
//         name: "Jane",
//         age: 25
//     }
// }
// // const person2 = {...person}
// const person2 = structuredClone(person)
// person2.person1.name = "hello"
// console.log(person);
// console.log(person2);

// const person ={
//     name: "John",
//     age: 30,
//     occupation: "Software Engineer",
// }


// let a =person["name"]
// console.log(person.name);

// let person = {}

// person.name = "hello"

// console.log(person);

// const person ={
//     name: "John",
//     age: 30,
//     occupation: "Software Engineer",
//     details:function (){
//         console.log("Name: "+ person.name + " Age: "+ person.age + " Occupation:"+person.occupation)
//     }
// }

// person.details()



// const obj = { a: { a1: 1, a2: 2, a3: 3 }, b: { b1: 3, b2: 4, b3: 5, z: { z1: 0, z2: -1 } }, c: 5, d: 6 }
// //output: {a1:1,a2:2,a3:3,b1:3,b2:4,b3:5,z1:0,z2:-1,c:5,d:6}

// let result = {}

// function flattenObj(obj) {
//     let primaryKeyObj = {}
//     for (let pk in obj) {
//         primaryKeyObj = obj[pk]

//         if (typeof primaryKeyObj == 'object') {
//             flattenObj(primaryKeyObj)
//         } else {
//             result[pk] = obj[pk]
//         }
//     }
//     console.log(primaryKeyObj);
//     return result
// }

// console.log(flattenObj(obj));

// const userInput = [
//     { name: "John", age: 25 },
//     { name: "Alice", age: 22 },
//     { name: "Bob", age: 30 }
// ];

// userInput.sort((a, b) => a.name.localeCompare(b.name));

// console.log(userInput);

// var nums = [0, 1, 2, 4, 5, 6, 7]
// const rotate = 4
// if (rotate > nums.length / 2) {
//     var fullrotate = nums.concat(nums.splice(0, rotate - 1))
// }
// else {
//     var fullrotate = nums.concat(nums.splice(0, rotate))
// }
// let min = fullrotate.reduce((a, b) => a < b ? a : b)
// return min
// console.log(min);


// let s = "loveleetcode";
// let count = {}; // Object to store the count of each character
// let length = s.length;

// // Count occurrences of each character
// for (let i = 0; i < length; i++) {
//     let char = s[i];
//     count[char] = (count[char] || 0) + 1;
// }

// // Find the first unique character
// let index = -1;
// for (let i = 0; i < length; i++) {
//     if (count[s[i]] === 1) {
//         index = i;
//         break;
//     }
// }

// console.log(index); // Output: 2


// let s = "loveleetcode";
// let index = -1; // Default index if no unique character is found

// // Loop through each character in the string
// for (let i = 0; i < s.length; i++) {
//     let char = s[i];

//     // Check if the first occurrence is the same as the last occurrence
//     if (s.indexOf(char) === s.lastIndexOf(char)) {
//         index = i;
//         break; // Stop once we find the first unique character
//     }
// }

// console.log(index); // Output: 2


let s = "loveleetcode";
let index = -1
for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (s.indexOf(char) === s.lastIndexOf(char)) {
        index = i;
        break;
    }
}

console.log(index); 

