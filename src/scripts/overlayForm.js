import createOverlay from "./overlay.js";
const formTrigger = document.querySelector('.button--banner');
const template = document.querySelector("#overlayTemplate").innerHTML;
const overlay = createOverlay(template);

formTrigger.addEventListener("click", function (e) {
	e.preventDefault();
	overlay.open();
	overlay.setContent("");
});
