const passwordBox = document.querySelector("#password"),
  btnCopy = document.querySelector("#copy-btn"),
  btn = document.querySelector("#btn"),
  lg = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase = "abcdefghijklmnopqrstuvwxyz",
  number = "0123456789",
  symbol = "@#$%^()_+~|}{[]<>/-=";

const allChars = upperCase + lowerCase + number + symbol;

const createPassword = () => {
  let password = "";

  while (lg > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passwordBox.value = password;
};

btn.addEventListener("click", () => createPassword());

const copyPassword = () => {
  passwordBox.select();
  document.execCommand("copy");
};

btnCopy.addEventListener("click", () => copyPassword());
