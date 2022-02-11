$(document).ready(function ()
{
	// Begin code Teun
	// accordion jquery pagina
	$('#accordion').accordion({
		collapsible: true,
		active: false,
		icons: { header: 'ui-icon-plus', activeHeader: 'ui-icon-minus' },
		heightStyle: 'content',
	});

	// Externe afbeelding uploaden en tonen
	$('#upload').change(function ()
	{
		const $file = this.files[0];
		let i = $(this).prev('label').clone();
		$(this).prev('label').text($file.name);
		console.log($file);
		if ($file)
		{
			let reader = new FileReader();
			reader.onload = function (event)
			{
				console.log(event.target.result);
				$('#imgPreview').attr('src', event.target.result).show();
			};
			reader.readAsDataURL($file);
		}
	});

	// Formulier validatie
	$(function ()
	{
		$('#form')
			.parsley()
			.on('field:validated', function ()
			{
				var ok = $('.parsley-error').length === 0;
				$('.bs-callout-info').toggleClass('hidden', !ok);
				$('.bs-callout-warning').toggleClass('hidden', ok);
			})
			.on('form:submit', function ()
			{
				return false; // Don't submit form for this demo
			});
	});

	// Index pagina inladen met andere paginas

	$('a.panel').click(function ()
	{
		//select huidig item
		current = $(this);

		//scroll naar item
		$('#wrapper').scrollTo($(this).attr('href'), 800);

		//cancel link default behavior
		return false;
	});

	//resize de items naar de nieuwe browser size
	$(window).resize(function ()
	{
		resizePanel();
	});

	function resizePanel()
	{
		width = $(window).width();
		height = $(window).height();

		mask_width = width * $('.item').length;

		$('#wrapper, .item').css({ width: width, height: height });
		$('#mask').css({ width: mask_width, height: height });

		$('#wrapper').scrollTo($('a.selected').attr('href'), 0);
	}

	// Einde code Teun

	//CODE IENNE

	// --TABS
	$('#tabs').tabs({
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

	let autocomplete = ['Basis', 'Events', 'Effecten', 'jQuery UI', 'Animatie', 'Plugins', 'Externe data', 'Home', 'jQuery', 'Contact', 'Datums', 'Voor wie', 'Over de cursus'];

	let links = [
		'#jquery #accordion 0',
		'#jquery #accordion 1',
		'#jquery #accordion 2',
		'#jquery #accordion 3',
		'#jquery #accordion 4',
		'#jquery #accordion 5',
		'#jquery #accordion 6',
		'#index',
		'#jquery',
		'#contact',
		'#index #tabs 2',
		'#index #tabs 1',
		'#index #tabs 0',
	];

	$('.fa-search').on('click', function ()
	{
		if (!open)
		{
			open = true;
			speed = ((150 - $inputSearch.width()) / 100) * averageSpeed;

			$icon.addClass('search-icon-active', 100, function ()
			{
				$inputSearch.stop().show().animate(
					{
						width: '150px',
						padding: '0, 15px',
					},
					speed
				);
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
	}).autocomplete({
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
				if ($inputSearch.val() == autocomplete[i])
				{
					if (links[i].includes(' '))
					{
						let page = links[i].substring(0, links[i].indexOf(' '));
						let tool = links[i].substring(links[i].indexOf(' ') + 1, links[i].lastIndexOf(' '));
						let idx = links[i].substring(links[i].lastIndexOf(' ') + 1, links[i].length);
						$('#wrapper').scrollTo(page, 800, function ()
						{
							if (tool == '#accordion') $(tool).accordion('option', 'active', parseInt(idx));
							else if (tool == '#tabs') $(tool).tabs('option', 'active', parseInt(idx));
						});
					}
					else $('#wrapper').scrollTo(links[i], 800);

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

			$inputSearch.stop().animate(
				{
					width: '0px',
					padding: '0',
				},
				speed,
				function ()
				{
					$inputSearch.hide().val('');
					$icon.removeClass('search-icon-active', 100);
				}
			);

			open = false;
		}
	}

	// ANIMATIONS
	let twinkling = null;
	let $animDiv = $('#animatie + div');
	//let $animImg = $('#animatie + div.ui-accordion-content-active img'); werkt niet?

	$animDiv.hover(
		function ()
		{
			$('#animatie + div.ui-accordion-content-active img')
				.stop()
				.animate({ opacity: '1' }, 1500, 'easeInElastic', function ()
				{
					twinkling = setInterval(Twinkle, 500);
				});
		},
		function ()
		{
			clearInterval(twinkling);
			$('#animatie + div.ui-accordion-content-active img').stop().animate({ opacity: '0' }, 1500, 'easeInElastic');
		}
	);

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
			$('#animatie+div div.twinkle:last-of-type').css({ width: size, height: size, left: left, top: top, '-webkit-transform': 'rotate(' + rot + 'deg)' });
		}
		$('#animatie+div div.twinkle').animate(
			{
				opacity: '1',
			},
			500,
			function ()
			{
				$(this).animate(
					{
						opacity: '0',
					},
					500,
					function ()
					{
						$(this).remove();
					}
				);
			}
		);
	}

	// --EVENTS
	$('#events+div .player').on("focus", function ()
	{
		$(this).text("gebruik de linker en rechter pijltjestoetsen om mij te bewegen")
	}).on("focusout", function ()
	{
		$(this).text("Klik op mij!")
	}).on("keydown", function (e)
	{
		switch (e.which)
		{
			// 37 = arrow left
			case 37:
				$(this).animate({ left: '-=2' }, 0);
				break;
			// 39 = arrow right
			case 39:
				$(this).animate({ left: '+=2' }, 0);
				break;
			default:
				break;
		}

	});


	// --FOOTER
	$('footer').removeClass('stayDown');
	let $window = $(window).height();
	let $page = $('body').height();
	let difference = $window - $page;
	if (difference > 0)
	{
		$('footer').addClass('stayDown');
	}
	//CODE IENNE END



	// Begin code Andreea

	// slider carouser
	$('.jquerySliderContainer ').slick({
		infinite: true,
		slidesToShow: 1,
		arrows: false,
		slidesToScroll: 1,
	});

	//dropdown menu
	$('.dropdownToggle').hover(function ()
	{
		$('.jqueryDropdownList').stop(true, false, false).fadeToggle(500);
	});

	// link van de dropdown menu met slick slider
	$('.jqueryDropdownList li').click(function ()
	{
		TrailerIndex = $(this).index() + 1;
		$('.jquerySliderContainer').slick('slickGoTo', parseInt(TrailerIndex), false);
	});

	//animatie van de text op de home slide
	setTimeout(function ()
	{
		$('.textAnimation').removeClass('hidden');
	}, 1000);

	//background icons
	$('.backgroundContainer').load("background.html");
	//$('.backgroundContainer').css({ 'top': $('header').height() }).height($('#wrapper').height()); // CODE LINE IENNE
	//$('main').css({ 'padding-bottom': $('footer').height() }); // CODE LINE IENNE 
});
