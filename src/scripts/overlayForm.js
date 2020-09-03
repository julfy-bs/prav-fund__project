const openOverlay = document.querySelector('#form-overlay-button');
const overlayForm = document.querySelector('#overlayForm');
const closeOverlay = document.querySelector('#close-overlay-button');
const container = document.querySelector('.overlay__container');

openOverlay.addEventListener('click', e => {
	e.preventDefault();
	overlayForm.classList.add('overlay--active');
	document.body.classList.add('restrictedScroll');
});

closeOverlay.addEventListener('click', e => {
	e.preventDefault();
	overlayForm.classList.remove('overlay--active');
	document.body.classList.remove('restrictedScroll');
});

overlayForm.addEventListener('click', e => {
	if (e.target === overlayForm || e.target === container) {
		e.preventDefault();
		overlayForm.classList.remove('overlay--active');
		document.body.classList.remove('restrictedScroll');
	}
});
