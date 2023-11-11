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
      let resetScreen = document.getElementById("reset");

      resetScreen.innerHTML = `
      <div class="big-icon"><i class="fa-solid fa-check-to-slot big-icon"></i></div>
      <h1 id="title-change">You won!</h1>
      <h2>The secret number is ${number}.</h2>
      <button class="play-again" id="btn-play-again">Play Again!</button>
      `;

      //   feedbackElement.innerHTML = `
      //   <div class="big-icon"><i class="fa-solid fa-check-to-slot big-icon"></i></div>
      // <p>You won! The secret number is ${number}.</p>
      //   `;
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

document.body.addEventListener("click", (e) => {
  if (e.target.id == "btn-play-again") {
    window.location.reload();
  }
});
