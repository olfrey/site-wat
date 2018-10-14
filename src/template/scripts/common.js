$(document).ready(function($) {

	$('.input_phone .input__wrap').mask('+7 (000) 000-00-00');


	$('.panel__nav li ul').each(function(index, el) {
		var li = $(this).parent('li');

		li.addClass('has-subnav');
	});

	var panel = $('.panel'),
			panelScroll = 'panel_scroll';

	$(window).on('load scroll', function(event) {
		var windowWidth = $(window).width(),
				windowScroll = $(window).scrollTop();
		if (windowScroll > 1) {
			panel.addClass(panelScroll);
		} else {
			panel.removeClass(panelScroll);
		}
	});

	$('.faq').tabs();

	$('.reviews__list').slick({
		fade: true
	});

	var nameProgram = $('#nameProgram');

	$('.popup__links li').click(function(event) {
		var attr = $(this).attr('data-name');

		if (!$(this).hasClass('selected')) {
			var siblings = $(this).siblings('li');
			siblings.removeClass('selected')
			$(this).addClass('selected');
			nameProgram.val(attr);
		}
	});

	$('.header__slider').slick({
		fade: true
	});


	var hum = $('.hum'),
			humToggle = 'hum_toggle',
			nav = $('.panel__nav'),
			navToggle = 'panel__nav_toggle';

	hum.click(function(event) {
		hum.toggleClass(humToggle);
		nav.toggleClass(navToggle);
	});

	$('.faq__nav li a').click(function(event) {
		if ($(window).width() < 992) {
			var href = $(this).attr('href');

			$("html, body").animate({scrollTop: $(href).offset().top - 90 +"px"}, 1500);

		}
	});
});
