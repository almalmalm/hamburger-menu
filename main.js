const hamburgerMenu = document.querySelector('.menu');
const circle = document.querySelector('.circle');
const xMark = document.querySelector('.x-mark');
const page = document.querySelector('.rotate');
const menubar = document.querySelector('.menubar');


if (window.matchMedia("(min-width: 450px)").matches) {
    /* the viewport is at least 400 pixels wide */
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
} else {
    /* the viewport is less than 400 pixels wide */
    hamburgerMenu.addEventListener('click', () => {
        circle.style.transform = 'rotate(-180deg)';
        page.style.transform = 'rotate(-20deg) translate(30vh, -30vh)';
        menubar.style.transform = 'translate(16vw)';
    });

    xMark.addEventListener('click', () => {
        circle.style.transform = 'rotate(0deg)';
        page.style.transform = 'rotate(0deg)';
        menubar.style.transform = 'translate(-16vw)';
    });

}


