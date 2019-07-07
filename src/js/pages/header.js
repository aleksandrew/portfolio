import $ from 'jquery';

export default $(() => {
	window.onscroll = () => {stickyHeader()}; 

	const header = document.getElementById("header");
	const sticky = header.offsetTop; 

	$('.header-line__micon').on('click', () => {
		$('.header-line__micon').toggleClass('open');
		$('.header-line').toggleClass('mb-20');
		$('.menu-list').toggleClass('on');
		$('.menu-link').toggleClass('eventClick'); 
	})

	$('.menu-link').on('click', () => {
		if ($(".menu-link").hasClass("eventClick")) {
			$('.header-line__micon').removeClass('open');
			$('.header-line').removeClass('mb-20');
			$('.menu-list').removeClass('on');
			$('.menu-link').removeClass('eventClick');
		} 
	})

	stickyHeader(() => {
		if(window.pageYOffset > sticky) {
			header.classList.add("sticky");
		} else {
			header.classList.remove("sticky");
		}
	})
})
