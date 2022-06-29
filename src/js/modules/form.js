export function form() {
    const formTitle = document.querySelector('.form-title');
    const getMediaQuire = window.matchMedia('(min-width: 768px)');

    function changeTitle(title, width) {
        if (width.matches) {
            title.innerHTML = 'Lightning fast prototyping '
        }
    }
    changeTitle(formTitle, getMediaQuire)
}