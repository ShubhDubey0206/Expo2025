let index = 0;
const images = document.querySelectorAll('.carousel img');
function showSlide(i) {
    images[index].classList.remove('active');
    index = (i + images.length) % images.length;
    images[index].classList.add('active');
}
function nextSlide() {
    showSlide(index + 1);
}
function prevSlide() {
    showSlide(index - 1);
}
setInterval(nextSlide, 3000);
