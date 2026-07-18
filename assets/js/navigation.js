(() => {
  const navigation = document.querySelector(".site-nav");
  const button = navigation?.querySelector(".nav-toggle");
  const menu = navigation?.querySelector(".trigger");

  if (!navigation || !button || !menu) {
    return;
  }

  const mobileQuery = window.matchMedia("(max-width: 600px)");

  function setMenuState(isOpen) {
    button.setAttribute("aria-expanded", String(isOpen));
    button.setAttribute(
      "aria-label",
      isOpen ? "Închide meniul" : "Deschide meniul",
    );
    menu.classList.toggle("is-open", isOpen);
  }

  button.addEventListener("click", () => {
    const isOpen = button.getAttribute("aria-expanded") === "true";
    setMenuState(!isOpen);
  });

  document.addEventListener("click", (event) => {
    if (mobileQuery.matches && !navigation.contains(event.target)) {
      setMenuState(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      button.getAttribute("aria-expanded") === "true"
    ) {
      setMenuState(false);
      button.focus();
    }
  });

  menu.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      setMenuState(false);
    }
  });

  mobileQuery.addEventListener("change", () => setMenuState(false));
})();