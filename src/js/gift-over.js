const facade = document.querySelector('.meditation-video-facade');

facade.addEventListener('click', () => {
  const videoId = facade.dataset.videoId;

  const iframe = document.createElement('iframe');
  iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&showinfo=0`; //

  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('allow', 'autoplay; encrypted-media');
  iframe.setAttribute('allowfullscreen', '');

  // Стилізація
  iframe.style.position = 'absolute';
  iframe.style.inset = '0';
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.border = 'none';
  iframe.style.zIndex = '3';

  facade.innerHTML = '';
  facade.appendChild(iframe);
});
