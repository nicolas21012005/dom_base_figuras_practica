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

// funciones para cambiar atributos

// funcion para que por prompt me deje insertar un color en Hexagesimal
const colorHEX = document.getElementById('btnHexColor');
function changeColorHEX() {
    resetearFigura();
    element.style.background = prompt('Ingrese un color en hexagesimal para su figura')
}

// funcion para que por prompt me deje elegir la figura
const selectFigure = document.getElementById('btnChooseFigure');
function chooseFigure() {
    resetearFigura();
    let key = prompt('Ingrese la figura que desea (circulo, estrella, cuadrado)');
    switch (key) {
        case 'circulo':
            circle();
            break;
        case 'estrella':
            star();
            break;
        case 'cuadrado':
            resetearFigura();
            break;
        default:
            break;
    }
}

// funcion para pasar a la siguiente imagen
const btnNextImage = document.getElementById('btnChangeImageNext')
function nextimage() {
    const imgs = [
        "img/imagen.jpg",
        "img/imagen2.jpg",
        "img/imagen3.jpg"
    ]
    const img = document.getElementById('mainImage');
    let currentImage = img.getAttribute('src')
    let siguiente = imgs[0]
    imgs.forEach((src, index) => {
        if (currentImage === imgs[index]) {
            if (index < imgs.length - 1) {
                siguiente = imgs[index + 1];
            } else {
                siguiente = imgs[0]
            }
        }
    });
    img.setAttribute('src', siguiente)
}

// funcion para pasar a la imagen anterior
const btnPrevImage = document.getElementById('btnChangeImagePrev')
function prevImage() {
    const imgs = [
        "img/imagen.jpg",
        "img/imagen2.jpg",
        "img/imagen3.jpg"
    ]
    const img = document.getElementById('mainImage');
    let currentImage = img.getAttribute('src')
    let anterior = imgs[imgs.length - 1]
    imgs.forEach((src, index) => {
        if (currentImage === imgs[index]) {
            if (index > 0) {
                anterior = imgs[index - 1];
            } else {
                anterior = imgs[imgs.length - 1]
            }
        }
    });
    img.setAttribute('src', anterior)
}

// funcion para ocultar imagen
const btnDisplayNone = document.getElementById('btnToggleImage')
function changeDisplayImage() {
    const img = document.getElementById('mainImage');
    img.classList.toggle('display')
}

// funcion para cambiar por prompt el atributo alt de la imagen
const btnAlt = document.getElementById('btnChangeAlt');
function altPrompt() {
    const img = document.getElementById('mainImage')
    img.setAttribute('alt', prompt('ingrese el alt que quiere que tenga la imagen'))
}

// funcion para cambiarle el atributo href de la img con prompt
const changeUrl = document.getElementById('btnChangeLink')
function changeLinkImg() {
    const siteToVisit = document.getElementById('mainLink')
    siteToVisit.setAttribute('href', prompt('Ingrese una Url'))
}

// funcion para asignarle el atributo target a la etiqueta a
const setTarget = document.getElementById('btnOpenLink')
function setTargetA() {
    const siteTarget = document.getElementById('mainLink')
    siteTarget.setAttribute('target', '_blank')
}

// funcion para remover el atributo href de la etiqueta a
const btnRemoveHref = document.getElementById('btnDisableLink')
function disableLink() {
    const tagA = document.getElementById('mainLink')
    tagA.removeAttribute('href')
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
    // botones de las funciones para cambiar los atrbutos
    colorHEX.addEventListener('click', changeColorHEX)
    selectFigure.addEventListener('click', chooseFigure)
    btnNextImage.addEventListener('click', nextimage)
    btnPrevImage.addEventListener('click', prevImage)
    btnDisplayNone.addEventListener('click', changeDisplayImage)
    btnAlt.addEventListener('click', altPrompt)
    changeUrl.addEventListener('click', changeLinkImg)
    setTarget.addEventListener('click', setTargetA)
    btnRemoveHref.addEventListener('click', disableLink)
})