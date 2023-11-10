window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

const guessElement = document.getElementById("guess");

recognition.lang = "en-US";

// recognition.start();

let speechTranscript = "";
function onSpeak(speech) {
  speechTranscript = speech.results[0][0].transcript;
  showSpeechTranscript(speechTranscript);
}

function showSpeechTranscript(speechTranscript) {
  guessElement.innerHTML = `
    <h3>You said:</h3>
    <span class="guess-box">${speechTranscript} </span>
    <div><i class="fa-solid fa-arrow-up"></i></div>
    <p>The secret number is bigger than that.</p>
    
    `;
}

recognition.addEventListener("result", onSpeak);

const button = document.querySelector(".guess-button");

const writtenGuess = document.querySelector(".guess-box");

button.addEventListener("click", () => {
  if (button.textContent == "Guess") {
    recognition.start();
    button.textContent = "Stop";
    return;
  } else {
    recognition.stop();
    button.textContent = "Guess";
  }
});

function compare() {}

// button.addEventListener("mouseout", () => {
//   recognition.stop();

//   console.log(recognition);
// });
