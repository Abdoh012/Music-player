// Variables
const audio = document.querySelector("audio"); // Song
const input = document.querySelector("input"); // Song time
const playAndPauseBtn = document.querySelector(".play-pause"); // Play and pause button
// End of variables

// Functions
function playAndPause() {
  // If the song is stopped play it
  if (audio.paused) {
    playAndPauseBtn.innerHTML = `<i class="fa fa-pause" aria-hidden="true"></i>`;
    audio.play();
    // If the song is played stop it
  } else {
    audio.pause();
    playAndPauseBtn.innerHTML = `<i class="fa fa-play" aria-hidden="true"></i>`;
  }
}

// Move current song time to the input value
function moveToSongTime() {
  audio.currentTime = input.value;
}

// Set the input value to the current song time
function inputValue() {
  input.value = audio.currentTime;
}
// End of functions

// Onload event => window
window.onload = () => {
  // Set range to 0
  input.value = 0;
  // Set the max value of input range
  input.max = audio.duration;
};
