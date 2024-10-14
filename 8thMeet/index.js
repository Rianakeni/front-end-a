// //JavaScript Object & Conditional
// //Deklarasi Object
// //Object Literal
// let john = {
//   firstName: "John",
//   age: 20,
//   isMarried: false,
//   grade: [80, 90, 100],
//   sayGreetings: function () {
//     console.log("Hello my name is " + this.firstName);
//   },
//   address: {
//     street: "jln Daat mogot",
//     city: "Manado",
//     province: "North Sulawesi",
//     postalCode: 95653,
//   },
// };
// console.log(john);

// //mengakses properti dalam object
// //1. Dot notation
// console.log(john.firstName); //john
// console.log(john.age); //20
// john.age = 31;
// console.log(john);
// john.job = "Teacher"; //Tambah properti baru
// console.log(john);

// //2. Bracket notation
// console.log(john["isMarried"]); //true
// john["nationality"] = "Indonesia"; //Tambah properti baru
// console.log(john);

// //Object method
// john.sayGreetings();

// //Object inside object
// console.log(john.address.city);

// //Delete properti dalam object
// delete john.grade;
// console.log(john);

// //Conditional
//1. if - else
//jika suhu hari ini lebih dari atau sama dengan 37
//tampilkan suhu hari ini panas
//Jika tidak tampilkan suhu hari ini dingin
// let temp = 37;
// if (temp >= 37) {
//   console.log("suhu hari ini panas");
// } else {
//   console.log("suhu hari ini dingin");
// }

//2. if - else if - else
//Jika nilai 100 - 80 tampilkan grade A
//Jika nilai 70 - 79 tampilkan grade B
//JIka nilai 50 - 69 tampilkan grade C
//Jika nilai < 50 tampilkan grade D
let grade = 75;
if (grade >= 80 && grade <= 100) {
  console.log("grade A");
} else if (grade >= 70 && grade <= 79) {
  console.log("grade B");
} else if (grade >= 50 && grade <= 69) {
  console.log("grade C");
} else {
  console.log("grade D");
}

// Switch - case
// Jika angka 1 tampilkan january
// Jika angka 2 tampilkan february
// Jika angka 3 tampilkan maret
// :
// Jika angka 12 tampilkan december
let number = 2;
switch (nummber) {
  case 1:
    console.log("january");
    break;
  case 2:
    console.log("february");
    break;
  case 3:
    console.log("maret");
    break;
  case 4:
    console.log("april");
    break;
}
