document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll(".carousel-container");

  carousels.forEach((carousel) => {
    const slide = carousel.querySelector(".carousel-slide");
    const cards = carousel.querySelectorAll(".product-card");
    const prevBtn = carousel.querySelector(".carousel-button.prev");
    const nextBtn = carousel.querySelector(".carousel-button.next");

    const cardsToShow = 4;
    const cardWidth = cards[0].offsetWidth + 23;
    const totalCards = cards.length;

    let currentIndex = 0;

    function updateCarousel() {
      const translateX = -(currentIndex * cardWidth);
      slide.style.transform = `translateX(${translateX}px)`;
    }

    prevBtn.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    });

    nextBtn.addEventListener("click", () => {
      if (currentIndex < totalCards - cardsToShow) {
        currentIndex++;
        updateCarousel();
      }
    });

    window.addEventListener("resize", updateCarousel);
  });
});
