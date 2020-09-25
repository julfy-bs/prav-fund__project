const employeeLink = document.querySelectorAll('.news__item--faq');
let arrayEmployeeLink = [...employeeLink];
arrayEmployeeLink.map((item) => {
	item.addEventListener('click', (e) => {
		e.preventDefault();
		let wrap = item.closest('.faq__wrapper').querySelector('.news__item--open')
		if (wrap) {
			item.closest('.news__item--faq').classList.add('news__item--open');
			wrap.classList.remove('news__item--open')
		} else {
			item.closest('.news__item--faq').classList.add('news__item--open');
		}
	})
});
