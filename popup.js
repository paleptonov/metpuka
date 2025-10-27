const popup = document.getElementById('orderPopup');
const openButtons = document.querySelectorAll('.open-popup'); // Все кнопки открытия
const closeButton = popup.querySelector('.popup__close');

// Функция открытия
function openPopup() {
  popup.classList.add('is-active');
  document.body.style.overflow = 'hidden'; // Блокируем скролл
  // Запоминаем, какой элемент был в фокусе
  previousActiveElement = document.activeElement;
  // Переводим фокус на попап
  closeButton.focus();
}

// Функция закрытия
function closePopup() {
  popup.classList.remove('is-active');
  document.body.style.overflow = ''; // Разблокируем скролл
  // Возвращаем фокус на элемент, который его вызвал
  if (previousActiveElement) previousActiveElement.focus();
}

// Слушатели событий
openButtons.forEach(btn => btn.addEventListener('click', openPopup));
closeButton.addEventListener('click', closePopup);
popup.querySelector('.popup__overlay').addEventListener('click', closePopup);

// Закрытие по Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && popup.classList.contains('is-active')) {
    closePopup();
  }
});

// Ловушка фокуса (для скринридеров)
popup.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    const focusableElements = popup.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (e.shiftKey) { // Shift + Tab
      if (document.activeElement === firstElement) {
        lastElement.focus();
        e.preventDefault();
      }
    } else { // Tab
      if (document.activeElement === lastElement) {
        firstElement.focus();
        e.preventDefault();
      }
    }
  }
});
