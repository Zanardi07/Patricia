// script.js
const imageCount = 53; // Número total de imagens
const imageFolder = 'img'; // Pasta onde as imagens estão localizadas

let slideIndex = 0;
const slideContainer = document.getElementById('slide-container');

// Função para criar slides com imagens aleatórias
function createSlides() {
    const imageIndices = Array.from({ length: imageCount }, (_, i) => i + 1);
    shuffleArray(imageIndices);

    imageIndices.forEach(index => {
        const slide = document.createElement('div');
        slide.className = 'slide fade';
        const img = document.createElement('img');
        img.src = `${imageFolder}/imagem${index}.jpg`;
        img.onerror = () => {
            img.src = `${imageFolder}/imagem${index}.jpeg`;
        };
        img.alt = `Imagem ${index}`;
        slide.appendChild(img);
        slideContainer.appendChild(slide);
    });
}

// Função para embaralhar um array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

createSlides();
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000); // Muda a imagem a cada 3 segundos
}

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.bottom = '0'; // Faz os corações surgirem do rodapé
    heart.style.animationDuration = `${Math.random() * 2 + 3}s`;
    document.querySelector('.hearts').appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 300);
