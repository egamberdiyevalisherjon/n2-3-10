function a() {} // regular function
let b = function () {}; // function expression
let c = () => {}; // arrow function

// recursive function
// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }

// let i = 0;
// function r() {
//   console.log(++i);
//   r();
// }

// let numbers = ["a", ["b", ["c", ["d", "e"]]]];

// function arrAdder(arr) {
//   console.log(arr[0]);
//   if (Array.isArray(arr[1])) {
//     arrAdder(arr[1]);
//   } else {
//     console.log(arr[1]);
//   }
// }

// function arrAdder(arr) {
//   let sum = "";
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[1])) {
//       sum += arr[0] + arrAdder(arr[1]);
//     } else {
//       sum += arr[0] + arr[1];
//     }
//   }
//   return sum;
// }

// function game() {
//   console.log("oyin boshlandi");
//   // ...
//   console.log("oyin tugadi");
//   let replay = confirm("Yana oynisnami?");

//   if (replay) {
//     game();
//   }
// }

// game();

// let person = {
//   name: "Eshmat",
//   age: 32,
//   // method
//   walk() {
//     console.log("Eshmat is walking");
//   },
// };

// HOF => High Order Function
// 1
// function a(b) {
//   b();
// }
// a(function () {});

// setTimeout(() => {
// }, 5000);

// 2

// function balance(name) {
//   let hisob = 1_000_000;
//   return function (amount) {
//     hisob += amount;
//     console.log(name + " da " + hisob + " so'm bor");
//   };
// }

// let eshmatTopup = balance("Eshmat");
// let toshshmatTopup = balance("Toshmat");
// let jasurTopup = balance("Jasur");

// eshmatTopup(300_000);
// toshshmatTopup(500_000);
// toshshmatTopup(200_000);
// jasurTopup(1_000_000_000);
// jasurTopup(23_000_000_000);
// eshmatTopup(100_000);

// function a() {
//   return function () {};
// }

// function adder(str1) {
//   return function (str2) {
//     console.log(str1 + str2);
//   };
// }

// let salomlashish = adder("Salom ");

// salomlashish("Eshmat");
// salomlashish("Toshmat");

// CB => CallBack Function

// setTimeout(() => {
//   console.log(123);
// }, 1000);

// IIFE => Immediately Invoked Function Expressions
// (function game() {
//   console.log("oyin boshlandi");
//   // ...
//   console.log("oyin tugadi");
//   let replay = confirm("Yana oynisnami?");
//   if (replay) {
//     game();
//   }
// })();

// let fruits = [
//   "Apple",
//   "Banana",
//   "Cherry",
//   "Strawberry",
//   "Grapes",
//   "Pineapple",
//   "Lemon",
//   "Melon",
//   "Lime",
//   "Mango",
//   "Avocado",
//   "Water Melon",
// ];

// let cars = [
//   "Matiz",
//   "Spark",
//   "Cobalt",
//   "Gentra",
//   "Onix",
//   "Tracker",
//   "Monza",
//   "Captiva",
//   "Malibu",
//   "TAHOE",
// ];

// let lyuboy = (item, index, arr) => {
//   console.log(index + 1 + ") " + item + ", " + arr[index + 1]);
// };

// fruits.forEach(lyuboy);
// cars.forEach(lyuboy);

// function eachOf(arr, cb) {
//   for (let i = 0; i < arr.length; i++) {
//     cb(arr[i], i, arr);
//   }
// }

// eachOf(fruits, lyuboy);

// eachOf(cars, lyuboy);

// High Order Array Methods

let users = [
  { id: 1, fName: "Eshmat", age: 32 },
  { id: 2, fName: "Toshmat", age: 55 },
  { id: 3, fName: "Tesha", age: 31 },
  { id: 4, fName: "Bolta", age: 45 },
];

let names = [];

users.forEach((item, index) => {
  console.log(item.fName, index);
  if (index !== 0) {
    names.push(item.fName);
  }
});

console.log(names);

// let ages = [];

// users.forEach((user) => {
//   ages.push(user.age);
// });

// console.log(names);
