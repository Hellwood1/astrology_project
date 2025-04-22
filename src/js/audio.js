// audio
const audio = document.getElementById('bgMusic');
const soundBtn = document.querySelector('.sound-btn');
const soundText = soundBtn.querySelector('.sound-btn-text');
const soundIcon = soundBtn.querySelector('.sound-svg use'); // обов'язково <use>, не svg

function updateButtonState() {
  if (audio.paused) {
    soundText.textContent = 'Відтворити';
    soundIcon.setAttribute('href', '../img/sprite.svg#play-icon');
  } else {
    soundText.textContent = 'Зупинити';
    soundIcon.setAttribute('href', '../img/sprite.svg#pause-icon');
  }
}

function tryPlay() {
  audio.play().then(() => {
    updateButtonState();
  }).catch((e) => {
    console.warn('Audio play failed', e);
  });

  document.removeEventListener('click', tryPlay);
  document.removeEventListener('scroll', tryPlay);
  document.removeEventListener('keydown', tryPlay);
}

document.addEventListener('click', tryPlay);
document.addEventListener('scroll', tryPlay);
document.addEventListener('keydown', tryPlay);

soundBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
  updateButtonState();
});