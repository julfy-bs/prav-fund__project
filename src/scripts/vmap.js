$(".js-init-region-map").each(function () {
	var $this = $(this),
		defaultcolor = $this.data("defaultcolor") || false,
		regioncolor = $this.data("regioncolor") || false,
		selectedcolor = $this.data("selectedcolor") || false,
		hovercolor = $this.data("hovercolor") || false,
		russiacolor = $this.data("russiacolor") || false,
		$map = $(".js-init-region-map-block", this),
		$default_highlighted = $(".js-map-highlight-default"),
		default_codes = ['ru'],
		onRegionClickCallback = false;

	if (russiacolor) {
		$default_highlighted.each(function () {
			var code = $(this).find(".flag").attr("class").replace("flag", "").trim().toLowerCase();
			default_codes.push(code);
		});
		onRegionClickCallback = function (element, code, region) {
			var $link = $(".flag." + code.toUpperCase(), $this).closest("a");
			if ($link.length) {
				$link.trigger("click");
				window.location.href = $link.attr("href");
			}
		};
	}

	$map.vectorMap({
		map: 'world_en',
		backgroundColor: '',
		borderColor: '',
		borderOpacity: 0.25,
		borderWidth: 1,
		color: defaultcolor,
		enableZoom: true,
		hoverColor: hovercolor,
		hoverOpacity: null,
		normalizeFunction: 'polynomial',
		selectedColor: selectedcolor,
		selectedRegions: ['RU', 'AZ', 'BE', 'DK', 'GE', 'JO', 'IE', 'KZ', 'KG', 'LV', 'LT', 'CN', 'MD', 'TJ', 'SE', 'EE'],
		onRegionClick: onRegionClickCallback,
		showTooltip: russiacolor ? true : false,
		onLabelShow: function (event, label, code) {
			var $link = $(".flag." + code.toUpperCase(), $this).closest("a");
			var $title = $(".b-coo-map__title");

			if ($link.length) {
				label.text($link.text().trim());
				$title.text($link.text().trim());
			} else if (code === 'ru') {
				label.text('Российская Федерация');
				$title.text('Российская Федерация');
			} else {
				event.preventDefault();
				$title.text('Центры правовой помощи на карте');
			}
		}
	});

	var highlightRegion = function (that, color) {
		var countries = $(that).data("countries").split(","),
			colors = {};

		for (var f = countries.length; f; f--) {
			colors[countries[f - 1]] = color;
		}

		$map.vectorMap('set', 'colors', colors);
	}
	var setDefaultColors = function () {
		if (russiacolor) {
			var colors = {};
			for (var f = default_codes.length; f; f--) {
				colors[default_codes[f - 1]] = russiacolor;
			}
			$map.vectorMap('set', 'colors', colors);
		}
		$(".js-init-region-map-active", $this).each(function () {
			highlightRegion(this, regioncolor);
		});
	};

	setDefaultColors();

	$(this).on("mouseover mouseleave", "[data-countries]", function (e) {
		highlightRegion(this, e.type === "mouseover" ? regioncolor : defaultcolor);
		let title = document.querySelector('.b-coo-map__title');
		if (e.type === "mouseleave") {
			setDefaultColors();
		} else {
			$(".js-init-region-map-active", $this).each(function () {
				highlightRegion(this, defaultcolor);
			});
		}
	});
});

$(document).on("change", ".js-redirect-on-change", function () {
	window.location.href = $(this).val();
});
