// funcion del circulo
const circleBtn = document.getElementById('btnCircle');
function circle() {
    const element = document.getElementById('figure');
    element.classList.toggle('circle')
}
// funcion de la estrella

const starBtn = document.getElementById('btnStar');
function star() {
    const element = document.getElementById('figure');
    element.classList.toggle('star')

}

document.addEventListener('DOMContentLoaded', function () {
    circleBtn.addEventListener('click', circle)
    starBtn.addEventListener('click', star)
})