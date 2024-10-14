function BMI(berat, tinggi) {
  let count = berat / (tinggi * tinggi);
  if (count < 18) {
    console.log("Your BMI: " + count);
    return "UNDERWEIGHT";
  } else if ((count > 18) & (count < 25)) {
    console.log("Your BMI: " + count);
    return "NORMAL";
  } else if ((count > 25) & (count < 30)) {
    console.log("Your BMI: " + count);
    return "OVERWEIGHT";
  } else if ((count > 30) & (count < 35)) {
    console.log("Your BMI: " + count);
    return "OBESE";
  } else {
    console.log("Your BMI: " + count);
    return "EXTREMELY OBESE";
  }
}
let output = BMI(50, 1.56);
console.log(output);
