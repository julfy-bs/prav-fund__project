const openOverlay = document.querySelector('#photo-overlay-button');
const overlayPhoto = document.querySelector('.overlay');
const closeOverlay = document.querySelector('#close-overlay-button');

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
