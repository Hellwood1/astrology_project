const audio = document.getElementById('bgMusic');
const soundBtn = document.querySelector('.sound-btn');
const soundText = soundBtn.querySelector('.sound-btn-text');
const soundIcon = soundBtn.querySelector('.sound-svg use');

function updateButtonState() {
  if (audio.paused) {
    soundText.textContent = 'Відтворити';
    soundIcon.setAttribute('href', './img/sprite.svg#play-icon');
  } else {
    soundText.textContent = 'Зупинити';
    soundIcon.setAttribute('xlink:href', './img/sprite.svg#pause-icon');
  }
}

function tryPlayOnce() {
  if (audio.paused) {
    audio.muted = false;
    audio.play().then(() => {
      updateButtonState();
    }).catch(e => {
      console.warn('Autoplay blocked:', e.message);
    });
  }

  document.removeEventListener('click', tryPlayOnce);
  document.removeEventListener('scroll', tryPlayOnce);
  document.removeEventListener('keydown', tryPlayOnce);
}

document.addEventListener('click', tryPlayOnce, { once: true });
document.addEventListener('scroll', tryPlayOnce, { once: true });
document.addEventListener('keydown', tryPlayOnce, { once: true });

soundBtn.addEventListener('click', () => {
  audio.muted = false;

  if (audio.paused) {
    audio.play().catch(e => console.warn('Manual play error:', e));
  } else {
    audio.pause();
  }

  updateButtonState();
});