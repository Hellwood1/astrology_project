document.addEventListener("DOMContentLoaded", () => {
  const videoBoxes = document.querySelectorAll(".small-video-box");

  videoBoxes.forEach((box) => {
    const video = box.querySelector("video");
    const overlay = box.querySelector(".video-overlay");
    const playBtn = box.querySelector(".video-play-btn");

    if (!video || !overlay) return;

    video.setAttribute("tabindex", "-1");

    if (playBtn) {
      playBtn.setAttribute("tabindex", "-1");
    }

    overlay.addEventListener("click", () => {
      video.play();
      overlay.style.opacity = "0";
      overlay.style.pointerEvents = "none";
      box.classList.add("video-playing");
      if (playBtn) playBtn.classList.add("hidden");
    });

    overlay.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " " || e.code === "Space") {
        e.preventDefault();
        video.play();
        overlay.style.opacity = "0";
        overlay.style.pointerEvents = "none";
        box.classList.add("video-playing");
        if (playBtn) playBtn.classList.add("hidden");
      }
    });

    if (playBtn) {
      playBtn.addEventListener("click", () => {
        video.play();
        overlay.style.opacity = "0";
        overlay.style.pointerEvents = "none";
        box.classList.add("video-playing");
        playBtn.classList.add("hidden");
      });
    }

    video.addEventListener("play", () => {
      overlay.style.opacity = "0";
      overlay.style.pointerEvents = "none";
      box.classList.add("video-playing");
      if (playBtn) playBtn.classList.add("hidden");
    });

    video.addEventListener("ended", () => {
      overlay.style.opacity = "1";
      overlay.style.pointerEvents = "auto";
      box.classList.remove("video-playing");
      if (playBtn) playBtn.classList.remove("hidden");
    });
  });
});