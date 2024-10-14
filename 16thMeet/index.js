// //Asynchronous ES6

// //di jalankan baris per baris
// console.log("Proses 1");
// console.log("Proses 2");
// console.log("Proses yang masukan waktu lama atau bahkan tidak berhenti");
// console.log("Proses 4");

// //Asynchronous -> multi thread -> non-blocking
// //1. Pararel
// setTimeout(() => {
//   console.log("Proses 1");
// }, 3000);
// console.log("Proses 2");
// setTimeout(() => {
//   console.log("Proses 3");
// }, 3000);
// console.log("Proses 4");
// //2. Concurrent
// setTimeout(() => {
//   console.log("Proses 1");
//   setTimeout(() => {
//     console.log("Proses 2");
//     setTimeout(() => {
//       console.log("Proses 3");
//       setTimeout(() => {
//         console.log("Proses 4");
//       }, 3000);
//     }, 3000);
//   }, 3000);
// }, 3000);

// //Promise

// let = condition;
// const newPromise = new Promise((resolve, reject) => {
//   if (condition) {
//     resolve("Berhasil");
//   } else {
//     reject("Gagal");
//   }
// });

// //Pakai Pronis
// //1. then - catch
// newPromise
//   .then((result) => {
//     return result;
//   })
//   .then((result2) => {
//     console.log(result2);
//   })
//   .catch((error) => console.log(error));

// //2. Async - Away
// //Selalu digunakan pada function
// const consumePromise = async () => {
//     try {
//         let result = await newPromise
//         console.log(result3)
//     } catch (error) {
//         console.log(error)
//     }
// }

// consumePromise()

// //Menggunakan Promise fetch

// import axios from "axios";
// axios
//   .get("https://jsonplaceholder.typicode.com/users")
//   .then((result) => console.log(result.data));
