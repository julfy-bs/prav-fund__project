import createOverlay from "./overlay.js";
const photoTrigger = document.querySelector('.photo__overlay');
const template = document.querySelector("#overlayTemplate").innerHTML;
const overlay = createOverlay(template);

photoTrigger.addEventListener("click", function (e) {
	e.preventDefault();
	overlay.open();
	overlay.setContent("");
});
