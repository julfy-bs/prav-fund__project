let openOverlay = document.querySelector('#video-overlay-button');
let overlayVideo = document.querySelector('#overlayVideo');
let overlayContent = document.querySelector('.overlay-content');
let theSource = overlayVideo.attr('src');

openOverlay.addEventListener('click', e => {
	e.preventDefault();
	overlayVideo.prop('src', 'theSource');
	overlayVideo.classList.add('overlay--active');
	document.body.classList.add('restrictedScroll');
});

overlayVideo.addEventListener("click", e => {
	if (e.target !== overlayContent) {
		e.preventDefault();
		overlayVideo.prop('src', '');
		overlayVideo.classList.remove('overlay--active');
		document.body.classList.remove('restrictedScroll');
	}
});



