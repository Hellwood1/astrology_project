document.addEventListener("DOMContentLoaded", function () {
    const facade = document.querySelector(".meditation-video-facade");
    if (!facade) return;

    const videoId = facade.dataset.videoId;
    const previewImg = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    facade.style.backgroundImage = `url('${previewImg}')`;

    facade.addEventListener("click", () => {
      const iframe = document.createElement("iframe");
      iframe.setAttribute(
        "src",
        `https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1`
      );
      iframe.setAttribute("allowfullscreen", "");
      iframe.setAttribute(
        "allow",
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      );
      iframe.className = "meditation-video";
      facade.replaceWith(iframe);
    });
  });

