const openOverlay = document.querySelector('#photo-overlay-button');
const overlayPhoto = document.querySelector('#overlayPhoto');
const container = document.querySelector('.overlay__container');
const closeOverlay = document.querySelector('#closeOverlay');

openOverlay.addEventListener('click', e => {
	e.preventDefault();
	overlayPhoto.classList.add('overlay--active');
	document.body.classList.add('restrictedScroll');
});

closeOverlay.addEventListener('click', e => {
	e.preventDefault();
	overlayPhoto.classList.remove('overlay--active');
	document.body.classList.remove('restrictedScroll');
});

overlayPhoto.addEventListener('click', e => {
	if (e.target === overlayPhoto || e.target === container) {
		e.preventDefault();
		overlayPhoto.classList.remove('overlay--active');
		document.body.classList.remove('restrictedScroll');
	}
});
