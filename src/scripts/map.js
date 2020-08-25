ymaps.ready(init);
let myMap;

const init = () => {
	myMap = new ymaps.Map("map", {
		center: [55.74732714, 37.58535200],
		zoom: 18,
		controls: [] // Отключение кнопок на карте //
	});

	// Массив координат на которых будут метки
	const coords = [
		[55.74732714, 37.58535200],
	];

	// Настройки маркеров
	const myCollection = new ymaps.GeoObjectCollection({}, {
		draggable: false,
		iconLayout: 'default#image',
		iconImageHref: './img/icons/map-marker.svg',
		iconImageSize: [46, 57],
		iconImageOffset: [-35, -52]
	})

	coords.forEach(coord => {
		myCollection.add(new ymaps.Placemark(coord));
	})

	// Команда добавления маркеров на карту
	myMap.geoObjects.add(myCollection);

	// Выключение масштабирование колесом мыши
	myMap.behaviors.disable('scrollZoom');
};

ymaps.ready(init);
