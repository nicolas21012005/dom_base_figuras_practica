// capturo la figura para todo el documento}
const element = document.getElementById('figure');

// funcion que me resetea la forma original de la figura cada que ejecuto una funcion
function resetearFigura() {
    element.style.cssText = "";
}

// funcion del circulo

const circleBtn = document.getElementById('btnCircle');
function circle() {
    resetearFigura();
    const element = document.getElementById('figure');
    element.style.borderRadius = '50%';
    element.style.background = 'yellow';
}

// funcion de la estrella
const starBtn = document.getElementById('btnStar');
function star() {
    resetearFigura();
    element.style.clipPath = "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)";
    element.style.transition = '1s';
    element.style.background = 'goldenrod';
}

// funcion del GIF
const gifBtn = document.getElementById('btnGif');
function gif() {
    resetearFigura();
    element.style.backgroundImage = 'url("https://media1.tenor.com/m/T6P6HbRwvGgAAAAC/30-washington.gif")';
}

// funcion de animacion infinita
const animationBtn = document.getElementById('btnAnim');
function infite() {
    resetearFigura();
    element.style.animation = 'animation 2s linear infinite';
}


document.addEventListener('DOMContentLoaded', function () {
    circleBtn.addEventListener('click', circle)
    starBtn.addEventListener('click', star)
    gifBtn.addEventListener('click', gif)
    animationBtn.addEventListener('click', infite)
})