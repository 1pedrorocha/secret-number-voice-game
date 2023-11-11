const feedbackElement = document.getElementById("feedback-guess");

function compare() {
  const number = +speechTranscript;

  if (Number.isNaN(number)) {
    console.log("valor inválido");
  } else {
    if (number == randomNumber) {
      console.log("acertou, miseravi");

      feedbackElement.innerHTML = `
      <div><i class="fa-solid fa-check-to-slot"></i></div>
    <p>You won! The secret number is ${number}.</p>
      `;
    } else if (number > randomNumber) {
      console.log("menos");
      feedbackElement.innerHTML = `
      <div><i class="fa-solid fa-arrow-down"></i></div>
    <p>The secret number is smaller than ${number}.</p>
      `;
    } else {
      console.log("mais");
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
