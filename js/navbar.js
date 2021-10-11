const ham = document.querySelector('.ham')
const enlaces = document.querySelector('.navbarHamLinks')
const barras = document.querySelectorAll('ham span');

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

ham.addEventListener('click', () => {
    enlaces.classList.toggle('activado')
    barras.forEach(child => {child.classList.toggle('animado')})
})