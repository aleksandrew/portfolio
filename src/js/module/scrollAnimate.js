import $ from 'jquery';

scrollAnimate((menuItems) => {
	const topMenu = $("#header");
	const topMenuHeight = topMenu.outerHeight();

	menuItems.on('click', ((e) => {
		let href = $(this).attr("href");
		let offsetTop = href === "#" ? 0 : $(href).offset().top;
		
		$('html, body').stop().animate({
			scrollTop: offsetTop
		}, 850);
		
		e.preventDefault();
	}));
})

export {scrollAnimate};
