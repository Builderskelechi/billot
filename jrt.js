
document.addEventListener('DOMContentLoaded',() => {
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const carouselTrack = document.querySelector('.carousel-track');
const carouselContainer = document.querySelector('.carousel-container');
const cardwidth = 250 + 20;

nextBtn.addEventListener('click', () => {
    carouselContainer.scrollLeft += cardwidth;
});

prevBtn.addEventListener('click', () => {
    carouselContainer.scrollLeft += cardwidth;
});

});