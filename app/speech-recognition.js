window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

const guessElement = document.getElementById("guess");

recognition.lang = "en-US";

// recognition.start();

let speechTranscript = "";
function onSpeak(speech) {
  speechTranscript = speech.results[0][0].transcript;
  if (speechTranscript == "one") {
    speechTranscript = "1";
  } else if (speechTranscript == "two") {
    speechTranscript = "2";
  } else if (speechTranscript == "three") {
    speechTranscript = "3";
  } else if (speechTranscript == "four") {
    speechTranscript = "4";
  } else if (speechTranscript == "five") {
    speechTranscript = "5";
  } else if (speechTranscript == "six") {
    speechTranscript = "6";
  } else if (speechTranscript == "seven") {
    speechTranscript = "7";
  } else if (speechTranscript == "eight") {
    speechTranscript = "8";
  } else if (speechTranscript == "nine") {
    speechTranscript = "9";
  } else if (speechTranscript == "ten") {
    speechTranscript = "10";
  }

  showSpeechTranscript(speechTranscript);
}

function showSpeechTranscript(speechTranscript) {
  guessElement.innerHTML = `
    <h3>You said:</h3>
    <span class="guess-box">${speechTranscript} </span>
        
    `;

  compare();
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

// button.addEventListener("mouseout", () => {
//   recognition.stop();

//   console.log(recognition);
// });
