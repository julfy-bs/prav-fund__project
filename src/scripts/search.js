const wrapper = document.querySelector('.phones__nav');
const search = document.querySelector('.search-icon__block');

search.addEventListener('click', e => {
	e.preventDefault();
	wrapper.classList.toggle('focus__search--active');
	// console.log('1123');
});

// input.addEventListener('blur', e => {
//   e.preventDefault();
//   // input.value = "";
// 	wrapper.classList.remove('focus__search--active');
// });

