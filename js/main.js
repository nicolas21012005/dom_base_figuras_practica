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

// funcion para cambiar el titulo
const changeTitle = document.getElementById('btnChangeTitle')
function changeMainTitle() {
    resetearFigura();
    let title = document.getElementById('mainTitle');
    title.textContent = prompt('Ingrese el nuevo titulo')
}

// funcion para cambiar el contenido del parrafo
const changeParagraph = document.getElementById('btnChangeParagraph')
function changeParagraphContent() {
    resetearFigura();
    let paragraph = document.getElementById('mainParagraph');
    paragraph.textContent = prompt('Ingrese el nuevo contenido del parrafo')
}

// funcion para añadir un parrafo nuevo
const createParagraph = document.getElementById('btnAddParagraph')
function createNewParagraph() {
    resetearFigura();
    let divContainer = document.getElementById('extraParagraphs');
    const newParagraph = document.createElement('p')
    divContainer.appendChild(newParagraph)
}

// funcion para eliminar el ultimo parrafo dentro del div
const deleteParagraphBtn = document.getElementById('btnRemoveParagraph')
function deleteLastParagraph() {
    resetearFigura();
    let divContainer = document.getElementById('extraParagraphs');
    const lastP = divContainer.querySelector('p:last-of-type');
    if (lastP) {
        lastP.remove();
    } else {
        alert('no hay parrafos para eliminar')
    }
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
    // botones de las funciones para cambiar los contenidos
    changeTitle.addEventListener('click', changeMainTitle)
    changeParagraph.addEventListener('click', changeParagraphContent)
    createParagraph.addEventListener('click', createNewParagraph)
    deleteParagraphBtn.addEventListener('click', deleteLastParagraph)
})