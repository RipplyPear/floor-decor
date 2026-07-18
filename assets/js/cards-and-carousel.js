(() => {
  const carousel = document.querySelector("[data-carousel]");

  if (!carousel) {
    return;
  }

  const track = carousel.querySelector("[data-carousel-track]");
  const slides = Array.from(track?.children ?? []);
  const previousButton = carousel.querySelector("[data-carousel-previous]");
  const nextButton = carousel.querySelector("[data-carousel-next]");
  const indicators = document.querySelector("[data-carousel-indicators]");

  if (!track || !previousButton || !nextButton || !indicators || slides.length === 0) {
    return;
  }

  let currentIndex = 0;

  const indicatorButtons = slides.map((_, index) => {
    const button = document.createElement("button");

    button.className = "dash";
    button.type = "button";
    button.setAttribute("aria-label", `Afișează setul de imagini ${index + 1}`);

    button.addEventListener("click", () => goToSlide(index));
    indicators.appendChild(button);

    return button;
  });

  function goToSlide(index) {
    currentIndex = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    indicatorButtons.forEach((button, buttonIndex) => {
      const isActive = buttonIndex === currentIndex;

      button.classList.toggle("active", isActive);
      button.setAttribute("aria-current", String(isActive));
    });
  }

  previousButton.addEventListener("click", () => goToSlide(currentIndex - 1));
  nextButton.addEventListener("click", () => goToSlide(currentIndex + 1));

  carousel.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goToSlide(currentIndex - 1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      goToSlide(currentIndex + 1);
    }
  });

  goToSlide(0);
})();