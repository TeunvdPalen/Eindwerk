$(document).ready(function ()
{
	$('#accordion').accordion({
		collapsible: true,
	});









	//IENNE

	// --TABS
	$("#tabs").tabs({
		active: 0,
		show: { effect: "blind", duration: 250 },
		hide: { effect: "blind", duration: 250 },
	});

	// --SEARCH
	let open = false;

	let autocomplete =
		[
			'Basis',
			'Events',
			'Effecten',
			'jQuery UI',
			'Animatie',
			'Plugin',
			'Externe data',
			'Home',
			'jQuery',
			'Contact',
			'Datums',
			'Voor wie',
			'Over de cursus'
		]

	let links =
		[
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
			'index.html#tabs 0'
		]

	$('.fa-search').on('click', function ()
	{
		let $this = $('this');
		let $icon = $('a .fa-search');
		let speed = 1000;

		if (!open)
		{
			$icon.addClass('search-icon-active', speed);

			$('input#search').animate({
				width: '150px',
				padding: '5px 15px',
			}, speed);

			open = true;
		}
		else
		{
			if ($('input[type=text]#search').val() != "")
			{
				for (let i = 0; i < autocomplete.length; ++i)
				{
					//TODO extra bijzetten op het einde
					if ($('input[type=text]#search').val() == autocomplete[i])
					{
						if (links[i].includes('index.html#tabs'))
						{
							let idx = links[i].substring(links[i].indexOf(' '), links[i].length);
							console.log(idx);

							window.location.href = links[i];
							$("#tabs").tabs("option", "active", idx);
						}
						else window.location.href = links[i];
					}
				}
			}

			$('input[type=text]#search').val("");
			$icon.removeClass('search-icon-active', speed);
			$('input[type=text]#search').animate({
				width: '0px',
				padding: '5px 0px',
			}, speed);

			open = false;
		}
	});

	$('input[type=text]#search').autocomplete({
		source: autocomplete,
		autoFocus: true,
		delay: 600,

	})
	//IENNE END
});
