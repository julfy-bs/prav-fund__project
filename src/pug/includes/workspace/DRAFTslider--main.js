const left = document.querySelector(".slider__left");
const right = document.querySelector(".slider__right");
const items = document.querySelector(".slider__main");
const sliderItem = document.querySelector(".slider__item");


right.addEventListener("click", function (e) {
  loop("right", e);
  console.log("l");

});

left.addEventListener("click", function (e) {
  loop("left", e);
  console.log("r");
});

function loop(direction, e) {
  e.preventDefault();
  if (direction === "right") {
    items.appendChild(items.firstElementChild);

  } else {
    items.insertBefore(items.lastElementChild, items.firstElementChild);
  }
}