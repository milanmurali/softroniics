
// let r = Math.floor(Math.random() * 26 + 100);
// let r = Math.floor(Math.random()*10)
// console.log(r);

// let person ={
//     name: "John",
//     age: 30,
//     details: function (a,b){
//         console.log(this.name + " is " + this.age + " years old"+a+b);
//     }
// }

// let person1={
//     name:"hello",
//     age:33,
// }


//  person.details.bind(person1)
// data()

// try {
//     adddlert("Welcome guest!");
//   }
//   catch(err) {
//     document.getElementById("demo").innerHTML = err;
//   }

// rightangletri
// let pattern = ''
// for (let i = 2; i < 5; i++) {
//   for (let j = 1; j < i; j++) {
//     console.log("i="+i+" j="+j)
//     pattern += '# '
//     console.log(pattern)
//   }
// }

//invertedrightangletri
// for (let i = 1; i <= 5; i++) {
//   let pattern = ''
//   for (let j = 5; j >= i; j--) {
//     pattern += "#";
//   }
//   console.log(pattern);
// }


// let str = "ccb"
// let str1 = str.split('').reverse().join('')
// if (str == str1) {
//   console.log("Palindrome");
// }
// else {
//   console.log("Not a Palindrome");
// }


// function sum(){
//   var c = a+b
// }
// sum(5,2)
// console.log(c);


// let paragraph = "This is a javascript program to find frequency of each word";
// let words = paragraph.toLowerCase().split(' ')
// console.log(words);
// typeof (words)
// let wordFrequency = {};
// words.forEach(word => {
//   wordFrequency[word] = (wordFrequency[word] || 0) + 1;
// });
// console.log(wordFrequency);


// const arr = [1,2,3,4,5,6,7,8,9]
// const even = []
// for (let i = 0; i<arr.length;i++){
//     if (arr[i] % 2 == 0){
//         even.push(arr[i])
//     }
// }
// console.log(even);


// const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1]
// const even = []
// for (const items of arr) {
//     if (items % 2 == 0) {
//         even.push(items)
//     }
// }
// console.log(even);


// let a = [4, 9, 2, 6, 4, 8, 9];
// let c = a.length;

// let b = [];
// for (let i = 0; i < a.length; i++) {
//     if (a[i] % 2 == 0) {
//         b.push(a[i]);
//     }
// }
// console.log(b);


const obj = { name: 'Alice', age: 25 };
// const entries = Object.entries(obj);
const entries = Object.entries(obj)

for (let [key, value] of entries) {
  console.log(key, value);
}
// Output:
// 'name' 'Alice'
// 'age' 25