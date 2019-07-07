import $ from 'jquery';

export default $(() => {
	$(window).scroll(() => {
		const windowHeight = $(window).height();
		const windowScrollPosTop = $(window).scrollTop();
		const windowScrollPosBottom = windowHeight + windowScrollPosTop;
		
		const descService = $("#descService").offset();
		const descServiceTop = descService.top;

		const serviseInfo = $(".skill-block").offset();
		const serviseInfoTop = serviseInfo.top;

		if (!$("#descService").hasClass("desc-service-complete")) {
			if (windowScrollPosBottom > descServiceTop) {
				$("#descService").addClass("desc-service-complete anim-service--bottom");
			} 
		}

		if (!$(".skill-block").hasClass("service-info-complete")) {
			if (windowScrollPosBottom > serviseInfoTop) {
				$(".service-info .skill-block--left").addClass("service-info-complete anim-serv--left");
				$(".service-info .skill-block--right").addClass("service-info-complete anim-serv--right");
			} 
		}
	})
})
