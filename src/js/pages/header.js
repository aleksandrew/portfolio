import $ from 'jquery';
import {scrollAnimate} from '../module/scrollAnimate';

export default $(() => {
	const header = document.getElementById("header");
	const scrollUp = $("#toHome");
	const sticky = header.offsetTop;

	window.onscroll = () => {stickyHeader()}; 

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

	scrollAnimate(scrollUp);

	function stickyHeader() {
		if(window.pageYOffset > sticky) {
			header.classList.add("sticky");
			scrollUp.addClass("home-btn--sticky");
		} else {
			header.classList.remove("sticky");
			scrollUp.removeClass("home-btn--sticky");
		}
	}
})
