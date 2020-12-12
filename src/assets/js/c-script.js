const searchMiddle = document.querySelector('.c-header-middle__search-is-open');
const searchMiddleActive = document.querySelector('.c-header-middle__search-is-close');
const searchInputActive = document.querySelector('.c-search');

const focusInputActive = document.querySelector('.c-search__input');
const menu = document.querySelector('.c-header-middle__menu');
const menuActive = document.querySelector('.c-header-middle__menu-is-close');
const menuBurger = document.querySelector('.c-header-middle__menu-is-open');
const menuOtherMb = document.querySelector('.c-menu-mobile');

window.addEventListener('click', event => {
    if (event.target.classList.contains('c-header-middle__search')) {
        searchMiddle.classList.toggle('_hidden');
        searchMiddle.classList.toggle('_visible');
        searchMiddleActive.classList.toggle('_hidden');
        searchMiddleActive.classList.toggle('_visible');
        searchInputActive.classList.toggle('_visible');
        if (searchMiddleActive.classList.contains('_visible')){
            focusInputActive.focus();
        }
        console.log(event.target);
    } else if (event.target.classList.contains('c-header-middle__menu')) {
        menuActive.classList.toggle('_hidden');
        menuActive.classList.toggle('_visible');
        menuBurger.classList.toggle('_hidden');
        menuBurger.classList.toggle('_visible');
        menuOtherMb.classList.toggle('_visible');
    }
})

window.addEventListener('resize', () => {
    if(window.innerWidth >= 1250) {
        searchInputActive.classList.remove('_visible');
        searchMiddle.classList.remove('_hidden');
        searchMiddle.classList.add('_visible');
        searchMiddleActive.classList.add('_hidden');
        searchMiddleActive.classList.remove('_visible');
    } else if (window.innerWidth >= 855) {
        menuActive.classList.add('_hidden');
        menuActive.classList.remove('_visible');
        menuBurger.classList.remove('_hidden');
        menuBurger.classList.add('_visible');
        menuOtherMb.classList.remove('_visible');
    }
})