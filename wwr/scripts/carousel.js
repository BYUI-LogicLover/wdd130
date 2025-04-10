document.addEventListener('DOMContentLoaded', () => {
  const carouselContainer = document.querySelector('.grid-container');
  const nextButton = document.querySelector('.carousel-button.next');
  const prevButton = document.querySelector('.carousel-button.prev');

  let currentIndex = 0;
  const totalItems = document.querySelectorAll('.grid-item').length;
  const itemsPerView = 3; // Adjust based on the visible items

  nextButton.addEventListener('click', () => {
    if (currentIndex < totalItems - itemsPerView) {
      currentIndex++;
      updateCarousel();
    }
  });

  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  function updateCarousel() {
    const offset = -(currentIndex * (100 / itemsPerView));
    carouselContainer.style.transform = `translateX(${offset}%)`;
  }
});