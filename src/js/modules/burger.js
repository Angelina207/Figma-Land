export function burger() {
    const burgerBtnOpen = document.querySelector('.header__burger').addEventListener('click', navOpen);
    const burgerBtnClose = document.querySelector('.nav-btn-inner').addEventListener('click', navClose);
    const navPage = document.querySelector('.header__nav');
    const overlay = document.querySelector('.overlay');
    
    function navOpen() {
        navPage.classList.add('is-open');
        overlay.style.display = 'block';
    }
    function navClose() {
        navPage.classList.remove('is-open');
        overlay.style.display = 'none';
    }
}