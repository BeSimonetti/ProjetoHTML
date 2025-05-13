document.addEventListener("DOMContentLoaded", () => {
    const slide = document.querySelector('.carousel-slide');
    const cards = document.querySelectorAll('.product-card');
    const prevBtn = document.querySelector('.carousel-button.prev');
    const nextBtn = document.querySelector('.carousel-button.next');
  
    const cardsToShow = 4;
    const cardWidth = cards[0].offsetWidth + 33; // 20px é a margem lateral somada
    const totalCards = cards.length;
  
    let currentIndex = 0;
  
    function updateCarousel() {
      const translateX = -(currentIndex * cardWidth);
      slide.style.transform = `translateX(${translateX}px)`;
    }
  
    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    });
  
    nextBtn.addEventListener('click', () => {
      if (currentIndex < totalCards - cardsToShow) {
        currentIndex++;
        updateCarousel();
      }
    });
  
    window.addEventListener('resize', () => {
      updateCarousel(); // Recalcular posição ao redimensionar
    });
  });
  