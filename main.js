const hamburgerMenu = document.querySelector('.menu');
const circle = document.querySelector('.circle');
const xMark = document.querySelector('.x-mark');
const page = document.querySelector('.rotate');
const menubar = document.querySelector('.menubar');

hamburgerMenu.addEventListener('click', () => {
    circle.style.transform = 'rotate(-180deg)';
    page.style.transform = 'rotate(-20deg) translate(15vw, -30vh)';
    menubar.style.transform = 'translate(16vw)';
});

xMark.addEventListener('click', () => {
    circle.style.transform = 'rotate(0deg)';
    page.style.transform = 'rotate(0deg)';
    menubar.style.transform = 'translate(-16vw)';
});
