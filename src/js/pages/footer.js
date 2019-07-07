import $ from 'jquery';

export default $(() => {
	$(window).scroll(() => {
		const windowHeight = $(window).height();
		const windowScrollPosTop = $(window).scrollTop();
		const windowScrollPosBottom = windowHeight + windowScrollPosTop;
		
		const footer = $("#footer").offset();
		const footerTop = footer.top;

		const serviseInfo = $(".skill-block").offset();
		const serviseInfoTop = serviseInfo.top;

		if (!$("#footer").hasClass("desc-footer-complete")) {
			if (windowScrollPosBottom > footerTop) {
				$("#footer").addClass("desc-footer-complete");
			} 
		}
	})
})
