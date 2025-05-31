const audio = document.getElementById('bgMusic');
const soundBtn = document.querySelector('.sound-btn');
const soundText = soundBtn.querySelector('.sound-btn-text');
const soundIcon = soundBtn.querySelector('.sound-svg use');

function updateButtonState() {
  if (!audio) return;

  if (audio.paused) {
    soundText.textContent = 'Відтворити';
    soundIcon.setAttribute('href', `${import.meta.env.BASE_URL}img/sprite.svg#play-icon`);
  } else {
    soundText.textContent = 'Зупинити';
    soundIcon.setAttribute('href', `${import.meta.env.BASE_URL}img/sprite.svg#pause-icon`);
  }
}

soundBtn.addEventListener('click', () => {
  if (!audio) return;

  audio.muted = false;

  if (audio.paused) {
    audio.play().catch(e => console.warn('Play error:', e));
  } else {
    audio.pause();
  }

  updateButtonState();
});


updateButtonState();