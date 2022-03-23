


const burger = document.querySelector('.burger i');
const nav = document.querySelector('.navigation');


function toggleNav() {
    burger.classList.toggle('fa-bars');
    burger.classList.toggle('fa-times');
    nav.classList.toggle('nav_active');
}


burger.addEventListener('click', function() {
    toggleNav();
});




