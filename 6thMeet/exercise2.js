//modify Exercise 1
//IIFE
let hasil = (function (berat, tinggi) {
  BMI1 = berat / (tinggi * tinggi);
  return "Your BMI = " + BMI1;
})(50, 1.56);

console.log(hasil);

//Callback
function BMI2(callback) {
  let result = callback(50, 1.56);
  return result;
}

let output = BMI2(function (berat, tinggi) {
  total = berat / (tinggi * tinggi);
  return "Your BMI = " + total;
});

console.log(output);
