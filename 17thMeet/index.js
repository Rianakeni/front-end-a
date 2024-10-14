//1.
const helloWorld = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello World!");
    }, 2000);
  });
};

async function messages() {
  const msg = await helloWorld();
  console.log(msg);
}

messages();

//2.
const ambilDataUser1 = () => {
  fetch("https://reqres.in/api/users")
    .then((response) => response.json())
    .then((users) => console.log(users.data));
};

ambilDataUser1();

//3.
async function ambilDataUser2() {
  try {
    const response = await fetch("https://reqres.in/api/users");
    const users = await response.json();
    console.log(users.data);
  } catch (error) {
    console.error("Error:", error);
  }
}

ambilDataUser2();

//4.
const ambilDataUser3 = async () => {
  try {
    const response = await axios.get("https://reqres.in/api/users");
    console.log(response.data.data);
  } catch (error) {
    console.error("Error:", error);
  }
};

ambilDataUser3();
