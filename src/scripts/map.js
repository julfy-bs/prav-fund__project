ymaps.ready(function () {
	let myMap = new ymaps.Map('map', {
			center: [55.74732714, 37.58535200],
			zoom: 18,
		}, {
			searchControlProvider: 'yandex#search'
		}),
		// Настройки маркеров
		myPlacemark = new ymaps.Placemark([55.74732714, 37.58535200], {
			hintContent: 'Фонд поддержки и защиты прав соотечественников, проживающих за рубежом',
		}, {
			// Опции.
			draggable: false,
			// Необходимо указать данный тип макета.
			iconLayout: 'default#image',
			// Своё изображение иконки метки.
			iconImageHref: '/local/templates/pravfond/assets/images/sprite.svg#map-marker',
			// Размеры метки.
			iconImageSize: [60, 62],
			// Смещение левого верхнего угла иконки относительно
			// её "ножки" (точки привязки).
			iconImageOffset: [-30, -90]
		});

	myMap.geoObjects
		.add(myPlacemark);
});
