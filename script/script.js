$(function() {
// start Выпадание подменю ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
	$('.nav__item').click(function() {
		$(this).toggleClass('item-active');

		var clickItem = $(this);
		$(document).mouseover(function(e) {
			if (!clickItem.is(e.target) && clickItem.has(e.target).length === 0) {
				clickItem.removeClass('item-active');
			}
		});
	});
// end Выпадание подменю ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// start Бургер ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
	$('.burger').click(function() {
		$('.page, .header, .nav__menu, .burger').toggleClass('burger-active');

		$('.header').removeClass('burger-off');
		if(!$('.header').hasClass('burger-active')) {
			$('.header').addClass('burger-off');
		}
	});
// end Бургер ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

});