const yearInput = document.querySelector('#yearRefresh');
let dateToday;

function formatDate(date) {
	const year = date.getFullYear();
	return `${year}`;
}

dateToday = new Date();

yearInput.textContent = formatDate(dateToday);


