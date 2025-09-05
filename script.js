// Select all keys
const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

// Mouse clicks
keys.forEach(key => {
  key.addEventListener('click', () => playNote(key));
});

// Play a note
function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note);
  noteAudio.currentTime = 0;   // restart sound so you can click fast
  noteAudio.play();
  key.classList.add('active');

  // remove the "pressed" look when sound finishes
  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active');
  });
}

// Keyboard controls
const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'];

document.addEventListener('keydown', e => {
  if (e.repeat) return; // ignore if held down
  const key = e.key;

  const whiteIndex = WHITE_KEYS.indexOf(key);
  const blackIndex = BLACK_KEYS.indexOf(key);

  if (whiteIndex > -1) playNote(whiteKeys[whiteIndex]);
  if (blackIndex > -1) playNote(blackKeys[blackIndex]);
});
