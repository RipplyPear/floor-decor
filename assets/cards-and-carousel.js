
    ;(function() {
      // ─── Carousel JS ───────────────────────────────────────────
      const track       = document.querySelector('.carousel-track');
      const slides      = Array.from(track.children);
      const prevBtn     = document.querySelector('.carousel-button.prev');
      const nextBtn     = document.querySelector('.carousel-button.next');
      const dotsContainer = document.querySelector('.carousel-indicators');
      let   currentIndex = 0;

      // build dashes
      slides.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.className = 'dash' + (i === 0 ? ' active' : '');
        dot.dataset.index = i;
        dotsContainer.appendChild(dot);
      });
      const dots = Array.from(dotsContainer.children);

      function goToSlide(idx) {
        if (idx < 0) idx = slides.length - 1;
        if (idx >= slides.length) idx = 0;
        track.style.transform = `translateX(-${idx * 100}%)`;
        dots[currentIndex].classList.remove('active');
        dots[idx].classList.add('active');
        currentIndex = idx;
      }

      prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
      nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));
      dots.forEach(d => d.addEventListener('click', e => goToSlide(+e.target.dataset.index)));
    })();
