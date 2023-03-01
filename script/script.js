const navBtn = document.querySelector('.media__button');
const mobileNav = document.querySelector('.mobile__nav');

navBtn.addEventListener('click', function() {
    mobileNav.classList.toggle('mobile__nav-active')
})