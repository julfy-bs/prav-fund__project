const photoTrigger = document.querySelector('.photo__overlay');
const videoTrigger = document.querySelector('.video__play');

const template = document.querySelector("#overlayTemplate").innerHTML
const overlay = createOverlay(template);

photoTrigger.addEventListener("click", function () {
	overlay.open();
	overlay.setContent("");
});

videoTrigger.addEventListener("click", function () {
	overlay.open();
	overlay.setContent("");
});

function createOverlay(template) {
	const fragment = document.createElement('div');

	fragment.innerHTML = template;

	const overlayElement = fragment.querySelector(".overlay");
	const contentElement = fragment.querySelector(".overlay__content");
	const closeElement = fragment.querySelector(".overlay__close");

	overlayElement.addEventListener("click", e => {
		if (e.target === overlayElement) {
			closeElement.click();
		}
	});
	closeElement.addEventListener("click", () => {
		document.body.removeChild(overlayElement);
		overlayElement.style.display = "none";
		document.body.style.overflow = 'auto'
	});

	return {
		open() {
			document.body.appendChild(overlayElement);
			overlayElement.style.display = "block";
			document.body.style.overflow = 'hidden'
		},
		close() {
			closeElement.click();
		},
		setContent(content) {
			contentElement.innerHTML = content;
		}
	};
}






