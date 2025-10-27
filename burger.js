// Управление мобильным меню
const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuOverlay = document.querySelector('.mobile-menu__overlay');

burger.addEventListener('click', () => {
    const isActive = burger.classList.toggle('burger--active');
    mobileMenu.classList.toggle('mobile-menu--active');
    document.body.style.overflow = isActive ? 'hidden' : '';
});

function closeMobileMenu() {
    burger.classList.remove('burger--active');
    mobileMenu.classList.remove('mobile-menu--active');
    document.body.style.overflow = '';
}

mobileMenuOverlay.addEventListener('click', closeMobileMenu);

// Закрытие меню при клике на ссылку
const mobileNavLinks = document.querySelectorAll('.mobile-nav__link');
mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// Закрытие меню при нажатии Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeMobileMenu();
    }
});