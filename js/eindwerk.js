$(document).ready(function () {
	// Begin code Teun
	// accordion jquery pagina
<<<<<<< Updated upstream
	// $('#accordion').accordion({
	// 	collapsible: true,
	// 	icons: { header: 'ui-icon-plus', activeHeader: 'ui-icon-minus' },
	// });
=======
	$('#accordion').accordion({
		collapsible: true,
		icons: { header: 'ui-icon-plus', activeHeader: 'ui-icon-minus' },
		heightStyle: 'content',
	});
>>>>>>> Stashed changes

	// Formulier validatie
	$('#form')
		.parsley()
		.on('field:validated', function () {
			var ok = $('.parsley-error').length === 0;
			$('.bs-callout-info').toggleClass('hidden', !ok);
			$('.bs-callout-warning').toggleClass('hidden', ok);
		})
		.on('form:submit', function () {
			return false; // Don't submit form for this demo
		});

	// Index pagina inladen met andere paginas

	// let $content = $('#content');

	// $('.main-nav li > a').on('click', function (e) {
	// 	let toLoad = $(this).attr('href') + ' #content';
	// 	$content.hide('fast', loadContent);

	// 	function loadContent() {
	// 		console.log(toLoad);
	// 		$content.load(toLoad, showNewContent);
	// 	}
	// 	function showNewContent() {
	// 		$content.show('normal');
	// 	}

	// 	e.preventDefault();
	// });

	// Einde code Teun

	//IENNE

	// --TABS
<<<<<<< Updated upstream
	// let $tabs = $('#tabs');
	// $tabs.tabs({
	// 	active: 0,
	// 	show: { effect: 'blind', duration: 250 },
	// 	hide: { effect: 'blind', duration: 250 },
	// });

	// // --SEARCH
	// let open = false;
	// let $inputSearch = $('input[type=text]#search');
	// let $icon = $('header .searchbar a');
	// let averageSpeed = 600;
	// let speed = 900;

	// let autocomplete = ['Basis', 'Events', 'Effecten', 'jQuery UI', 'Animatie', 'Plugin', 'Externe data', 'Home', 'jQuery', 'Contact', 'Datums', 'Voor wie', 'Over de cursus'];

	// let links = [
	// 	'jquery.html#basis',
	// 	'jquery.html#events',
	// 	'jquery.html#effecten',
	// 	'jquery.html#jquery-ui',
	// 	'jquery.html#animatie',
	// 	'jquery.html#plugin',
	// 	'jquery.html#externe-data',
	// 	'index.html',
	// 	'jquery.html',
	// 	'contact.html',
	// 	'index.html#tabs 2',
	// 	'index.html#tabs 1',
	// 	'index.html#tabs 0',
	// ];

	// $('.fa-search').on('click', function () {
	// 	if (!open) {
	// 		open = true;
	// 		speed = ((150 - $inputSearch.width()) / 100) * averageSpeed;

	// 		$icon.addClass('search-icon-active', 100, function () {
	// 			$inputSearch.stop().show().animate(
	// 				{
	// 					width: '150px',
	// 					padding: '0, 15px',
	// 				},
	// 				speed
	// 			);
	// 		});
	// 	} else {
	// 		Search();
	// 		if ($inputSearch.val() == '') CloseSearch();
	// 	}
	// });

	// $inputSearch.on('keypress', function (e) {
	// 	// 13 is the ENTER key
	// 	if (e.which == 13) {
	// 		Search();
	// 	}
	// });

	// $inputSearch.autocomplete({
	// 	source: autocomplete,
	// 	autoFocus: true,
	// 	delay: 600,
	// });

	// function Search() {
	// 	if ($inputSearch.val() != '') {
	// 		for (let i = 0; i < autocomplete.length; ++i) {
	// 			//TODO extra bijzetten op het einde
	// 			if ($inputSearch.val() == autocomplete[i]) {
	// 				if (links[i].includes('index.html#tabs')) {
	// 					let idx = links[i].substring(links[i].indexOf(' '), links[i].length);
	// 					window.location.href = links[i];
	// 					$tabs.tabs('option', 'active', idx);
	// 				} else window.location.href = links[i];

	// 				CloseSearch();
	// 			}
	// 		}
	// 	}
	// }

	// function CloseSearch() {
	// 	if (open) {
	// 		speed = ($inputSearch.width() / 100) * averageSpeed;

	// 		$inputSearch.stop().animate(
	// 			{
	// 				width: '0px',
	// 				padding: '0',
	// 			},
	// 			speed,
	// 			function () {
	// 				$inputSearch.hide().val('');
	// 				$icon.removeClass('search-icon-active', 100);
	// 			}
	// 		);

	// 		open = false;
	// 	}
	// }

	// // ANIMATIONS
	// let lightOn = false;

	// $('#accordion #animatie img.light-button').on('click', function () {
	// 	if (lightOn) {
	// 		lightOn = true;
	// 		$('#accordion #animatie ~ div img.light-button').attr('scr', 'img/on.png');
	// 		$('#animatie ~ div.ui-accordion-content-active img').stop().animate({ opacity: '1' }, 1500, 'easeInElastic');
	// 	} else {
	// 		lightOn = false;
	// 		$('#accordion #animatie ~ div img.light-button').attr('scr', 'img/off.png');
	// 		$('#animatie ~ div.ui-accordion-content-active img').stop().animate({ opacity: '0' }, 1500, 'easeInElastic');
	// 	}
	// });

	// //IENNE END
=======
	let $tabs = $('#tabs');
	$tabs.tabs({
		active: 0,
		show: { effect: 'blind', duration: 250 },
		hide: { effect: 'blind', duration: 250 },
	});

	// --SEARCH
	let open = false;
	let $inputSearch = $('input[type=text]#search');
	let $icon = $('header .searchbar a');
	let averageSpeed = 600;
	let speed = 900;

	let autocomplete = ['Basis', 'Events', 'Effecten', 'jQuery UI', 'Animatie', 'Plugin', 'Externe data', 'Home', 'jQuery', 'Contact', 'Datums', 'Voor wie', 'Over de cursus'];

	let links = [
		'jquery.html#basis',
		'jquery.html#events',
		'jquery.html#effecten',
		'jquery.html#jquery-ui',
		'jquery.html#animatie',
		'jquery.html#plugin',
		'jquery.html#externe-data',
		'index.html',
		'jquery.html',
		'contact.html',
		'index.html#tabs 2',
		'index.html#tabs 1',
		'index.html#tabs 0',
	];

	$('.fa-search').on('click', function ()
	{
		if (!open)
		{
			open = true;
			speed = ((150 - $inputSearch.width()) / 100) * averageSpeed;

			$icon.addClass('search-icon-active', 100, function ()
			{
				$inputSearch.stop().show().animate({
					width: '150px',
					padding: '0, 15px',
				}, speed)
			});
		} else
		{
			Search();
			if ($inputSearch.val() == '') CloseSearch();
		}
	});

	$inputSearch.on('keypress', function (e)
	{
		// 13 is the ENTER key
		if (e.which == 13)
		{
			Search();
		}
	});

	$inputSearch.autocomplete({
		source: autocomplete,
		autoFocus: true,
		delay: 600,
	});

	function Search()
	{
		if ($inputSearch.val() != '')
		{
			for (let i = 0; i < autocomplete.length; ++i)
			{
				//TODO extra bijzetten op het einde
				if ($inputSearch.val() == autocomplete[i])
				{
					if (links[i].includes('index.html#tabs'))
					{
						let idx = links[i].substring(links[i].indexOf(' '), links[i].length);
						window.location.href = links[i];
						$tabs.tabs('option', 'active', idx);
					} else window.location.href = links[i];

					CloseSearch();
				}
			}
		}
	}

	function CloseSearch()
	{
		if (open)
		{
			speed = ($inputSearch.width() / 100) * averageSpeed;

			$inputSearch.stop().animate({
				width: '0px',
				padding: '0',
			}, speed, function ()
			{
				$inputSearch.hide().val("");
				$icon.removeClass('search-icon-active', 100);
			});

			open = false;
		}
	}


	// ANIMATIONS
	let twinkling = null;
	let $animDiv = $('#animatie + div');
	//let $animImg = $('#animatie + div.ui-accordion-content-active img'); werkt niet?

	$animDiv.hover(function ()
	{
		$('#animatie + div.ui-accordion-content-active img').stop().animate({ opacity: '1' }, 1500, 'easeInElastic', function () { twinkling = setInterval(Twinkle, 500); });

	}, function ()
	{
		clearInterval(twinkling);
		$('#animatie + div.ui-accordion-content-active img').stop().animate({ opacity: '0' }, 1500, 'easeInElastic');
	});

	function Twinkle()
	{
		let amount = Math.floor(Math.random() * 20) + 2;

		for (let i = 0; i < amount; ++i)
		{
			let size = Math.floor(Math.random() * 25);
			let left = Math.random() * ($animDiv.width() - size * 2);
			let top = Math.random() * ($animDiv.height() - size * 2);
			let rot = Math.random() * 360;
			$animDiv.append("<div class='twinkle'></div>");
			$('#animatie+div div.twinkle:last-of-type').css({ "width": size, "height": size, "left": left, "top": top, "-webkit-transform": "rotate(" + rot + "deg)" });
		}
		$('#animatie+div div.twinkle').animate({
			opacity: '1',
		}, 500, function ()
		{
			$(this).animate({
				opacity: '0',
			}, 500, function ()
			{
				$(this).remove();
			});
		});
	}
	//IENNE END
>>>>>>> Stashed changes
});
