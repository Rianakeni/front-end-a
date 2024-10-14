//Rest parameter & Spread Operator

//1. Rest parameter
//tanpa rest parameter
const func1 = (param1, param2, param3) => {
  console.log(param1, param2, param3);
};

func1("A", "B", "C");

//dengan rest parameter
const func2 = (...params) => {
  console.log(params);
};

func2("A", "B", "C", "D", "E");

const func3 = (param1, param2, ...params) => {
  console.log(param1, param2);
  console.log(params);
};

func3("A", "B", "C", "D", "E");

//mini exercise
//Ubah dengan menggunakan rest parameter

const penjumlahan = (a, b, c, d, e) => {
  let arr = [a, b, c, d, e];
  let hasil = 0;
  arr.forEach((item) => (hasil += item));
  return hasil;
};

console.log(penjumlahan(1, 2, 3, 4, 5));

//jawaban
const penjumlahan2 = (...arr) => {
  //rest itu tipenya array
  let hasil = 0;
  arr.forEach((item) => (hasil += item));
  return hasil;
};

console.log(penjumlahan2(1, 2, 3, 4, 5, 6, 7, 8, 9));

//spread operator
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(...numbers);

//kapan menggunakan spread operator?
//saat mau duplikasi array (buat array baru yang isinya sama dengan array yang lain)
//caranya:
//1. duplikasi array
let numbers2 = [...numbers];
console.log(numbers2);

//2. menggabungka array
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = [7, 8, 9];

let numbers3 = array1.concat(array2, array3); //ES5
let numbers4 = [...array1, ...array2, ...array3]; //ES6

console.log(numbers3);
console.log(numbers4);

//Object
//1. duplikasi object
const john = {
  fullName: "John Doe",
  age: 30,
};

const john2 = { ...john, address: "Manado" };
console.log(john2);

//2. menggabungkan object
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let combineObj = { ...obj1, ...obj2 };
console.log(combineObj);
