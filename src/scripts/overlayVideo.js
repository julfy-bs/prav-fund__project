const openOverlay = document.querySelector('#video-overlay-button');
const overlayVideo = document.querySelector('#overlayVideo');
const closeOverlay = document.querySelector('#close-overlay-button');

openOverlay.addEventListener('click', e => {
	e.preventDefault();
	overlayVideo.classList.add('overlay--active');
	document.body.classList.add('restrictedScroll');
});

closeOverlay.addEventListener('click', e => {
	e.preventDefault();
	overlayVideo.classList.remove('overlay--active');
	document.body.classList.remove('restrictedScroll');
});
