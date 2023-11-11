const feedbackElement = document.getElementById("feedback-guess");

function compare() {
  const number = +speechTranscript;

  if (Number.isNaN(number)) {
    console.log("valor inválido");
    feedbackElement.innerHTML = `
      <div><i class="fa-solid fa-circle-xmark"></i></div>
    <p>Oops! It seems your guess is not a number...</p>
      `;
  } else if (number < minValue || number > maxValue) {
    feedbackElement.innerHTML = `
      <div><i class="fa-solid fa-circle-xmark"></i></div>
    <p>Oops! It seems your guess is out of the range.</p>
    <p>Please, try again with values between ${minValue} and ${maxValue}.
      `;
  } else {
    if (number == randomNumber) {
      feedbackElement.innerHTML = `
      <div class="big-icon"><i class="fa-solid fa-check-to-slot big-icon"></i></div>
    <p>You won! The secret number is ${number}.</p>
      `;
    } else if (number > randomNumber) {
      feedbackElement.innerHTML = `
      <div><i class="fa-solid fa-arrow-down"></i></div>
    <p>The secret number is smaller than ${number}.</p>
      `;
    } else {
      feedbackElement.innerHTML = `
      <div><i class="fa-solid fa-arrow-up"></i></div>
    <p>The secret number is bigger than ${number}.</p>
      `;
    }
  }
}

{
  /* <div><i class="fa-solid fa-arrow-up"></i></div>
    <p>The secret number is bigger than that.</p> */
}
