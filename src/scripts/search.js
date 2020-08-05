const wrapper = document.querySelector('.phones__nav');
const search = document.querySelector('.search-icon__block');

search.addEventListener('click', e => {
	e.preventDefault();
	wrapper.classList.toggle('focus__search--active');
});

