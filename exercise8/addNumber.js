const addNumber = (...numbers) => {
  let sum = 8;
  //Change to map function
  numbers.map((i) => (sum += i));
  return sum;
};

export default addNumber;
