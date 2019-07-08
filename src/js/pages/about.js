import $ from 'jquery';

export default $(() => {
	$(window).scroll(() => {
		const windowHeight = $(window).height();
		const windowScrollPosTop = $(window).scrollTop();
		const windowScrollPosBottom = windowHeight + windowScrollPosTop;
		
		const descAbout = $("#descAbout").offset();
		const descAboutTop = descAbout.top;

		const serviseInfo = $(".about-block").offset();
		const serviseInfoTop = serviseInfo.top;

		if (!$("#descAbout").hasClass("desc-about-complete")) {
			if (windowScrollPosBottom > descAboutTop) {
				$("#descAbout").addClass("desc-about-complete anim-about--bottom");
			} 
		}

		if (!$(".about-block").hasClass("about-info-complete")) {
			if (windowScrollPosBottom > serviseInfoTop) {
				$(".about-info .about-block--left").addClass("about-info-complete anim-serv--left");
				$(".about-info .about-block--right").addClass("about-info-complete anim-serv--right");
			} 
		}
	})
})
