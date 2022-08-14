const billInput = document.getElementById("bill-input");
const peopleInput = document.getElementById("people-input");
const tipInput = document.getElementById("tip-input");
const totalInput = document.getElementById("total-input");
const peopleValue = parseInt(peopleInput.value, 10);
//currency formatter
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

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
  let result = percentValue / numOfPeople;
  let tipResult = formatter.format(result);
  tipInput.setAttribute("value", tipResult);

  // for total value
  let totalValue = billInput.value / numOfPeople + result;
  let totalResult = formatter.format(totalValue);
  totalInput.setAttribute("value", totalResult);
}
// a different function is needed for the custom to prvent NaN value from the field
function customCalculate(btn) {
  let tipValue = btn.value;
  let percentValue = (tipValue / 100) * billInput.value;
  let result = percentValue / numOfPeople;
  let tipResult = formatter.format(result);
  tipInput.setAttribute("value", tipResult);
  // for total value
  let totalValue = billInput.value / numOfPeople + result;
  let totalResult = formatter.format(totalValue);
  totalInput.setAttribute("value", totalResult);
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
//reset functionality
const inputArray = [billInput, peopleInput, tipInput, totalInput, tipcustom];
const resetBtn = document.getElementById("reset-btn");
resetBtn.addEventListener("click", (e) => {
  reset(inputArray);
});
function reset(array) {
  array.forEach((item) => {
    item.removeAttribute("value", "");
  });
}
