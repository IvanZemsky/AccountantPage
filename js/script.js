(function () {
    const burgerItem = document.querySelector('.info-menu');
    const menu = document.querySelector('.header__info-list');
    const menuCloseItem = document.querySelector('.info-close');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__info-list_active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header__info-list_active');
    });
}());
