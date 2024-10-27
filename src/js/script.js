// SCRIPT SECCION ADOPTA
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.adopt-slide');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    const slidesContainer = document.querySelector('.adopt-slides');
    slidesContainer.style.transform = `translateX(${-currentSlide * 100}%)`;
}

function adoptNextSlide() {
    showSlide(currentSlide + 1);
}

function adoptPrevSlide() {
    showSlide(currentSlide - 1);
}

// Opcional: cambiar automáticamente cada 5 segundos
//setInterval(nextSlide, 5000);

// SCRIPT SECCION TESTIMONIOS //
let currentSlide2 = 0;

function showSlide2(index2) {
    const slides2 = document.querySelectorAll('.testimonials-slide');
    if (index2 >= slides2.length) {
        currentSlide2 = 0;
    } else if (index2 < 0) {
        currentSlide2 = slides2.length - 1;
    } else {
        currentSlide2 = index2;
    }

    const slidesContainer2 = document.querySelector('.testimonials-slides');
    slidesContainer2.style.transform = `translateX(${-currentSlide2 * 100}%)`;
}

function testNextSlide() {
    showSlide2(currentSlide2 + 1);
}

function testPrevSlide() {
    showSlide2(currentSlide2 - 1);
}

// Opcional: cambiar automáticamente cada 5 segundos
//setInterval(nextSlide, 5000);