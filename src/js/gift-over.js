const facade = document.querySelector('.meditation-video-facade');
facade.addEventListener('click', () => {
  const videoId = facade.dataset.videoId;
  const iframe = document.createElement('iframe');
  iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&showinfo=0`;
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('allow', 'autoplay; encrypted-media');
  iframe.setAttribute('allowfullscreen', '');
  iframe.className = 'meditation-video';

  facade.replaceWith(iframe);
});