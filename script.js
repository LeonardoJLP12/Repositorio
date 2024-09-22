let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex >= slides.length) { slideIndex = 0; }
    slides[slideIndex].style.display = "block";
}

function moveSlide(n) {
    slideIndex += n;
    const slides = document.querySelectorAll('.slide');
    if (slideIndex >= slides.length) { slideIndex = 0; }
    if (slideIndex < 0) { slideIndex = slides.length - 1; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

// Inicializar el slider
showSlides();
setInterval(showSlides, 3000); // Cambia de imagen cada 3 segundos

function showFlowerImage() {
    const flowerImage = document.getElementById('flower-image');
    const button = document.getElementById('showFlowerBtn');

    // Verifica si la imagen está oculta y alterna entre mostrar y ocultar
    if (flowerImage.style.display === 'none' || flowerImage.style.display === '') {
        flowerImage.style.display = 'block'; // Muestra la imagen
        button.innerHTML = 'Ocultar Flores Amarillas'; // Cambia el texto del botón
    } else {
        flowerImage.style.display = 'none'; // Oculta la imagen
        button.innerHTML = 'Flores Amarillas Para Mi Osita Hermosa❤️‍🩹'; // Cambia el texto del botón
    }
}
