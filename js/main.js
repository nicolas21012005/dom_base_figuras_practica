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
    element.style.borderRadius = '50%';
    element.style.background = '#b80000';
}

// funcion de la estrella
const starBtn = document.getElementById('btnStar');
function star() {
    resetearFigura();
    element.style.clipPath = "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)";
    element.style.transition = '1s';
    element.style.background = 'yellow';
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
    element.style.background = 'gray';
}

// funcion para mover arriba 

const moveTop = document.getElementById('btnMoveUp');
function up() {
    resetearFigura();
    element.style.transform = 'translateY(-60px)';
    element.style.background = 'black';
}

// funcion para mover abajo 

const moveDown = document.getElementById('btnMoveDown');
function down() {
    resetearFigura();
    element.style.transform = 'translateY(60px)';
    element.style.background = 'orange';
}

// funcion para mover a la izquierda 

const moveLeft = document.getElementById('btnMoveLeft');
function left() {
    resetearFigura();
    element.style.transform = 'translateX(-60px)';
    element.style.background = 'green';
}

// funcion para mover a la derecha 

const moveRight = document.getElementById('btnMoveRight');
function right() {
    resetearFigura();
    element.style.transform = 'translateX(60px)';
    element.style.background = 'red';
}

document.addEventListener('DOMContentLoaded', function () {
    circleBtn.addEventListener('click', circle)
    starBtn.addEventListener('click', star)
    gifBtn.addEventListener('click', gif)
    animationBtn.addEventListener('click', infite)
    moveTop.addEventListener('click', up)
    moveDown.addEventListener('click', down)
    moveRight.addEventListener('click', right)
    moveLeft.addEventListener('click', left)
})