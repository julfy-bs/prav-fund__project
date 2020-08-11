import createOverlay from "./overlay.js";
const videoTrigger = document.querySelector('.video__play');
const template = document.querySelector("#overlayTemplate").innerHTML
const overlay = createOverlay(template);

videoTrigger.addEventListener("click", function (e) {
	e.preventDefault();
	overlay.open(); 
	overlay.setContent("");
});
