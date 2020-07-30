var employeeLink = document.querySelectorAll('.menu__link');
var arrayEmployeeLink = [...employeeLink];
arrayEmployeeLink.map((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    var wrap = item.closest('.menu__list--hamburger').querySelector('.menu__item--displayed')
    if (wrap) {
      item.closest('.menu__item--hamburger').classList.add('menu__item--displayed');
      wrap.classList.remove('menu__item--displayed')
    } else {
      item.closest('.menu__item--hamburger').classList.add('menu__item--displayed');
    }
  })
});