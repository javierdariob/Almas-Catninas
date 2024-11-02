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


/* SCRIPT LIGHTBOX SECCION WHY-ADOPT */
const lightbox = document.getElementById('lightbox');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxDescription = document.getElementById('lightbox-description');
const closeBtn = document.querySelector('.close');

let data;

fetch('src/json/data.json')
    .then(response => response.json())
    .then(json => {
        data = json;
        document.querySelectorAll('.lightbox-trigger').forEach((item, index) => {
            item.addEventListener('click', () => {
                lightbox.style.display = 'flex';
                lightboxTitle.textContent = data[index].title;
                lightboxDescription.textContent = data[index].description;
            });
        });
    });

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});


/* SCRIPT FOOTER */
document.getElementById('footer-Form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('footer-name').value;
    const whatsapp = document.getElementById('footer-whatsapp').value;
    const email = document.getElementById('footer-email').value;
    const subject = document.getElementById('footer-subject').value;

    if(name && whatsapp && email) {
        alert(`Gracias, ${name}. Nos pondremos en contacto contigo a través de WhatsApp (${whatsapp}) o tu correo electrónico (${email}).`);
    } else {
        alert('Por favor, completa todos los campos.');
    }
});