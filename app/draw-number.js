const minValueElement = document.getElementById("min-value");
const maxValueElement = document.getElementById("max-value");

const minValue = 1;
const maxValue = 1000;

minValueElement.innerHTML = minValue;
maxValueElement.innerHTML = maxValue;

function generateRandomNumber() {
  number = parseInt(Math.random() * maxValue + 1);
  return number;
}

const randomNumber = generateRandomNumber();

console.log("Random number: " + randomNumber);
