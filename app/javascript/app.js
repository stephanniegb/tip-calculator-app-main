const billInput = document.getElementById("bill-input");
const peopleInput = document.getElementById("people-input");
const tipInput = document.getElementById("tip-input");
const totalInput = document.getElementById("total-input");
const peopleValue = parseInt(peopleInput.value, 10);

const tip5 = document.getElementById("five-percent");
const tip10 = document.getElementById("ten-percent");
const tip15 = document.getElementById("fifteen-percent");
const tip25 = document.getElementById("twentyFive-percent");
const tip50 = document.getElementById("fifty-percent");
const tipcustom = document.getElementById("custom");

let numOfPeople;
tip5.addEventListener("click", (e) => {
  numOfPeople = parseInt(peopleInput.value, 10);
  validate(tip5);
});
tip10.addEventListener("click", (e) => {
  numOfPeople = parseInt(peopleInput.value, 10);
  validate(tip10);
});
tip15.addEventListener("click", (e) => {
  numOfPeople = parseInt(peopleInput.value, 10);
  validate(tip15);
});
tip25.addEventListener("click", (e) => {
  numOfPeople = parseInt(peopleInput.value, 10);
  validate(tip25);
});
tip50.addEventListener("click", (e) => {
  numOfPeople = parseInt(peopleInput.value, 10);
  validate(tip50);
});
tipcustom.addEventListener("input", (e) => {
  numOfPeople = parseInt(peopleInput.value, 10);
  customValidate(tipcustom);
});

function validate(tip) {
  if (peopleInput.value <= 0 || peopleInput.value == " ") {
    addError();
  } else {
    removeError();
    calculate(tip);
  }
}
function customValidate(tip) {
  if (peopleInput.value <= 0 || peopleInput.value == " ") {
    addError();
  } else {
    removeError();
    customCalculate(tip);
  }
}
function calculate(tipBtn) {
  let tipValue = parseInt(tipBtn.value, 10);
  let percentValue = (tipValue / 100) * billInput.value;
  let tipResult = percentValue / numOfPeople;
  console.log(tipValue);
  console.log(billInput.value);
  console.log(numOfPeople);
  tipInput.setAttribute("value", tipResult);
  // for total value
  // let totalValue = parseInt(totalInput.value, 10)
  // let total = totalValue +
}
// a different function is needed for the custom to prvent NaN value from the field
function customCalculate(btn) {
  let tipValue = btn.value;
  let percentValue = (tipValue / 100) * billInput.value;
  let tipResult = percentValue / numOfPeople;
  console.log(tipValue);
  console.log(billInput.value);
  console.log(numOfPeople);
  tipInput.setAttribute("value", tipResult);
}
//error functions
const error = document.getElementById("error");
function addError() {
  error.style.visibility = "visible";
  peopleInput.classList.add("err-input");
}
function removeError() {
  error.style.visibility = "hidden";
  peopleInput.classList.remove("err-input");
}
