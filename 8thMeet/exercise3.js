let Riana = {
  firstName: "Riana",
  weight: 50,
  height: 1.56,
  calculateBMI() {
    Riana.BMI = this.weight / (this.height * this.height);
    console.log(Riana.BMI);
    if (Riana.BMI < 16) {
      console.log("Severaly Underweight");
    } else if (Riana.BMI >= 16 && Riana.BMI <= 18.4) {
      console.log("Underweight");
    } else if (Riana.BMI >= 18.5 && Riana.BMI <= 24.9) {
      console.log("Normal");
    } else if (Riana.BMI >= 25 && Riana.BMI <= 29.9) {
      console.log("Overweight");
    } else if (Riana.BMI >= 30 && Riana.BMI <= 34.9) {
      console.log("Moderately obese");
    } else if (Riana.BMI >= 35 && Riana.BMI <= 39.9) {
      console.log("Severely obese");
    } else {
      console.log("Morbidly obese");
    }
  },
};

console.log(Riana);
Riana.calculateBMI();
