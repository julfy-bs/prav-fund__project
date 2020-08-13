let tabNav = document.querySelectorAll('.news-menu__item'),
	tabContent = document.querySelectorAll('.tab'), tabName;

if (typeof tabNav !== 'undefined') {
	let tab = function () {

		tabNav.forEach(item => {
			item.addEventListener('click', selectTabNav)
		});

		function selectTabNav() {
			tabNav.forEach(item => {
				item.classList.remove('is-active')
			});
			this.classList.add('is-active');
			tabName = this.getAttribute('data-tab-name');
			selectTabContent(tabName);
		}

		function selectTabContent(tabName) {
			tabContent.forEach(item => {
				item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
			});
		}
	};

	tab();
}



