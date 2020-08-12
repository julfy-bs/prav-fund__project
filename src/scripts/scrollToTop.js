const arrowTop = document.querySelector('.button-to-top');

arrowTop.onclick = function() {
	window.scrollTo(pageXOffset, 0);
};

window.addEventListener('scroll', function() {
	arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight * 0.1);
});
