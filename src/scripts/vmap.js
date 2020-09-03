jQuery(document).ready(function () {
	jQuery('#vmap').vectorMap({
		map: 'world_en',
		backgroundColor: "#fff",
		borderColor: '#fff',
		borderOpacity: 0.25,
		borderWidth: 1,
		color: '#cddfed',
		enableZoom: false,
		hoverColor: '#ffaa02',
		hoverOpacity: null,
		normalizeFunction: 'linear',
		scaleColors: ['#b6d6ff', '#005ace'],
		selectedColor: '#2a87ce',
		multiSelectRegion: true,
		selectedRegions: ['RU', 'AZ', 'BE', 'DK', 'GE', 'JO', 'IE', 'KZ', 'KG', 'LV', 'LT', 'CN', 'MD', 'TJ', 'SE', 'EE'],
		showTooltip: false,
	});
});
