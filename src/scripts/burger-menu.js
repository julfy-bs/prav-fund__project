const hamburger = document.querySelector('#hamburger-menu-link');
const nav = document.querySelector('#hamburger-menu');
const closeNavButton = document.querySelector('#close-nav-button');
const navLinks = nav.querySelectorAll('.menu__semi-link');

if (typeof hamburger !== 'undefined') {
	hamburger.addEventListener('click', e => {
		// e.preventDefault(); Переход по ссылке оставлен для того, чтобы пользователь не застрял в случае, когда не видно кнопки "Закрыть бургер меню"
		nav.classList.add('hamburger-menu--active');
		document.body.classList.add('restrictedScroll');
	});
}


if (typeof closeNavButton !== 'undefined') {
	closeNavButton.addEventListener('click', e => {
		e.preventDefault();

		nav.classList.remove('hamburger-menu--active');
		document.body.classList.remove('restrictedScroll');
	});
}


if (typeof navLinks !== 'undefined') {
	for (let i = 0; i < navLinks.length; i++) {
		navLinks[i].addEventListener('click', function () {
			nav.classList.remove('hamburger-menu--active');
			document.body.classList.remove('restrictedScroll');
		});
	}
}


