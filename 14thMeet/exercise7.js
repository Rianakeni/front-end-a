//Array Destructuring
const fruits = ["Apple", "Banana", "Cherry"];
const [firstFruit, secondFruit, thirdFruit] = fruits;

console.log(firstFruit);
console.log(secondFruit);
console.log(thirdFruit);

// Object Destructuring
const user = { nama: "Alice", age: 25, city: "New York" };
const { nama, age, city } = user;

console.log(nama);
console.log(age);
console.log(city);

// Array Destructuring dengan Mengambil Sebagian Item (Array & Object)
const colors = ["Red", "Green", "Blue", "Yellow"];
const [firstColor, , thirdColor] = colors;

console.log(firstColor);
console.log(thirdColor);

// Object Destructuring dengan Mengambil Sebagian Item (Array & Object)
const car = { brand: "Toyota", model: "Corolla", year: 2021 };
const { brand, year } = car;

console.log(brand);
console.log(year);

//1
const calculateAge = (birthYear) => 2019 - birthYear;

const yearUntilRetirement = ({ year, firstName }) => {
  let age = calculateAge(year);
  let retirement = 60 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
  } else {
    console.log(`${firstName} is already retired.`);
  }
};

yearUntilRetirement({ year: 1987, firstName: "John" });

//2.
const addNumber = (...numbers) => {
  let sum = 8;
  // Using map function with destructuring
  numbers.map((i) => (sum += i));
  return sum;
};

console.log(addNumber(1, 2, 3, 4, 5, 6, 7));

//3.
const phi = 3.14;
let radius = 0;

// Adding default parameter for power = 2
const calculateArea = ({ radius, power = 2 }) => phi * Math.pow(radius, power);

radius = 21;
const area21 = calculateArea({ radius });

radius = 7;
const area7 = calculateArea({ radius });

console.log(`area with 21 radius: ${area21} and area with 7 radius: ${area7}`);

//4.
const makeAjaxRequest = (url = "www.google.com", method = "GET") => {
  console.log(url, method);
};

makeAjaxRequest("www.google.com");
