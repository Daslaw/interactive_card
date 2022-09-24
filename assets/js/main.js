const cardNumberBox = document.querySelector(".card-number");
const cardNameBox = document.querySelector(".card-name");
const monthBox = document.querySelector(".month");
const yearBox = document.querySelector(".year");
const cvcBox = document.querySelector(".cvc");
const cardholderNameInput = document.getElementById("cardholder-name");
const cardNumberInput = document.getElementById("card-number");
const cardExpMonth = document.getElementById("month");
const cardExpYear = document.getElementById("year");
const cvc = document.getElementById("cvc");
const submitBtn = document.querySelector(".submit-btn");
const submittedContainer = document.querySelector(".submitted-container");
const form = document.querySelector(".form");
const cardNameError = document.querySelector(".card-name-error");
const cardNumberError = document.querySelector(".card-number-error");
const monthError = document.querySelector(".month-error");
const yearError = document.querySelector(".year-error");
const cvcError = document.querySelector(".cvc-error");
const continueBtn = document.querySelector(".continue-btn");

cardholderNameInput.addEventListener("keyup", (e) => {
  let cardNameValue = cardholderNameInput.value;
  let key = e.key;
  let keyLetters = key.match(/^[A-za-z ]*$/);
  if (cardNameValue.length === 0) {
    cardNameError.innerHTML = "Please enter your name!";
  } else if (keyLetters) {
    cardNameBox.innerHTML = cardNameValue;
  } else {
    cardholderNameInput.setAttribute("disabled", "");
    cardNameError.innerHTML = "Please use only letters!";
  }
});
cardNumberInput.addEventListener("keyup", (e) => {
  let cardNumberValue = cardNumberInput.value;
  let key = e.key;
  let keyNumbers = key.match(/^[0-9 ]*$/);
  if (cardNumberValue.length === 0) {
    cardNumberError.innerHTML = "Please enter your card number!";
  } else if (keyNumbers) {
    cardNumberBox.innerHTML = cardNumberValue;
  } else if (key === "Backspace") {
    cardNumberInput.setAttribute("enabled", "");
  } else {
    cardNumberInput.setAttribute("disabled", "");
    cardNumberError.innerHTML = "Please use only numbers!";
  }
});
cardNumberInput.addEventListener("input", (e) => {
  e.target.value = e.target.value = e.target.value
    .replace(/[^\dA-Z]/g, "")
    .replace(/(.{4})/g, "$1 ")
    .trim();
});
cardExpMonth.addEventListener("input", (e) => {
  let value = e.target.value;
  let valueNumbers = value.match(/^[0-9 ]*$/);
     if (value === "") {
    monthError.innerHTML = "Please enter month";
          } else if (valueNumbers) {
    monthBox.innerHTML = value;
  } else {
    monthError.innerHTML = "Please enter month!";
    cardExpMonth.setAttribute("disabled", "");
  }
});
cardExpYear.addEventListener("input", (e) => {
  let value = e.target.value;
  let valueNumbers = value.match(/^[0-9 ]*$/);
  if (value === "") {
    yearError.innerHTML = "Please enter year!";
  } else if (valueNumbers) {
    yearBox.innerHTML = valueNumbers;
  } else {
    yearError.innerHTML = "Please enter year!";
    cardExpYear.setAttribute("disabled", "");
  }
});
cvc.addEventListener("input", (e) => {
  let value = e.target.value;
  let valueNumbers = value.match(/^[0-9 ]*$/);
  if (value === "") {
    cvcError.innerHTML = "Please enter cvc!";
  } else if (valueNumbers) {
    cvcBox.innerHTML = valueNumbers;
  } else {
    cvcError.innerHTML = "Please enter cvc!";
    cvc.setAttribute("disabled", "");
  }
});
// Submission BTN
submitBtn.addEventListener("click", () => {
  if (cardholderNameInput.value.length <= 0) {
    cardNameError.innerHTML = "Please enter your name!";
  } else if (cardNumberInput.value.length <= 0) {
    cardNumberError.innerHTML = "Please enter your card number!";
  } else if (cardExpMonth.value.length <= 0) {
    monthError.innerHTML = "Please enter month!";
  } else if (cardExpYear.value.length <= 0) {
    yearError.innerHTML = "Please enter year!";
  } else if (cvc.value.length <= 0) {
    cvcError.innerHTML = "Please enter your cvc!";
  } else {
    submittedContainer.style.display = "block";
    form.style.display = "none";
  }
});
continueBtn.addEventListener("click", () => {
  submittedContainer.style.display = "none";
  continueBtn.style.width = "100%";
  form.style.display = "block";
});