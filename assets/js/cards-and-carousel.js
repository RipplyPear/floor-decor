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

  const mobileQuery = window.matchMedia("(max-width: 600px)");
  let slidesPerView = mobileQuery.matches ? 1 : 2;
  let currentPage = 0;
  let currentImageIndex = 0;
  let indicatorButtons = [];

  function pageCount() {
    return Math.ceil(slides.length / slidesPerView);
  }

  function renderIndicators() {
    indicators.replaceChildren();

    indicatorButtons = Array.from({ length: pageCount() }, (_, index) => {
      const firstImage = index * slidesPerView + 1;
      const lastImage = Math.min(firstImage + slidesPerView - 1, slides.length);
      const button = document.createElement("button");

      button.className = "dash";
      button.type = "button";
      button.setAttribute(
        "aria-label",
        `Afișează imaginile ${firstImage}–${lastImage}`,
      );

      button.addEventListener("click", () => goToPage(index));
      indicators.appendChild(button);

      return button;
    });
  }

  function goToPage(index) {
    const totalPages = pageCount();

    currentPage = (index + totalPages) % totalPages;
    currentImageIndex = currentPage * slidesPerView;
    track.style.transform = `translateX(-${currentPage * 100}%)`;

    indicatorButtons.forEach((button, buttonIndex) => {
      const isActive = buttonIndex === currentPage;

      button.classList.toggle("active", isActive);
      button.setAttribute("aria-current", String(isActive));
    });
  }

  function handleViewportChange() {
    const previousImageIndex = currentImageIndex;

    slidesPerView = mobileQuery.matches ? 1 : 2;
    renderIndicators();
    goToPage(Math.floor(previousImageIndex / slidesPerView));
  }

  previousButton.addEventListener("click", () => goToPage(currentPage - 1));
  nextButton.addEventListener("click", () => goToPage(currentPage + 1));

  carousel.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goToPage(currentPage - 1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      goToPage(currentPage + 1);
    }
  });

  mobileQuery.addEventListener("change", handleViewportChange);

  renderIndicators();
  goToPage(0);
})();