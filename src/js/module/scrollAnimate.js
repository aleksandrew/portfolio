import $ from 'jquery';

function scrollAnimate(menuItems) {
	menuItems.on('click', function (e) {
		let href = $(this).attr("href");
		let offsetTop = href === "#" ? 0 : $(href).offset().top;
		
		$('html, body').stop().animate({
			scrollTop: offsetTop
		}, 850);
		
		e.preventDefault();
	});
}

export {scrollAnimate};
