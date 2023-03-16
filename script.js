//Selecting elements from the Html

const mediaButton =document.querySelector('#hamburger');
const navItems = document.querySelector('.nav-items');

//Event

mediaButton.addEventListener('click', function (e) {
    mediaButton.classList.toggle('fa-burger');
    mediaButton.classList.toggle('fa-xmark');
    navItems.classList.toggle('show-list');
});add