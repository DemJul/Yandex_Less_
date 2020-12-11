const searchMiddle = document.querySelector('.c-header-middle__search-is-open');
const searchMiddleActive = document.querySelector('.c-header-middle__search-is-close');
const searchInputActive = document.querySelector('.c-search');

window.addEventListener('click', event => {
    if (event.target.classList.contains('c-header-middle__search')) {
        searchMiddle.classList.toggle('_hidden');
        searchMiddle.classList.toggle('_visible');
        searchMiddleActive.classList.toggle('_hidden');
        searchMiddleActive.classList.toggle('_visible');
        searchInputActive.classList.toggle('_visible');
        console.log(event.target);
    }
})