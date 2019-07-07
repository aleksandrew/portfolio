import $ from 'jquery';

export default $(() => {
	$(window).scroll(() => {
		const windowHeight = $(window).height();
		const windowScrollPosTop = $(window).scrollTop();
		const windowScrollPosBottom = windowHeight + windowScrollPosTop;
		
		const descPortfolio = $("#descPortfolio").offset();
		const descPortfolioTop = descPortfolio.top;

		const portfolioWorks = $(".portfolio-works").offset();
		const portfolioWorksTop = portfolioWorks.top;

		if (!$("#descPortfolio").hasClass("desc-portfolio-complete")) {
			if (windowScrollPosBottom > descPortfolioTop) {
				$("#descPortfolio").addClass("desc-portfolio-complete anim-portfolio--bottom");
			} 
		}

		if (!$(".portfolio-works").hasClass("service-info-complete")) {
			if (windowScrollPosBottom > portfolioWorksTop) {
				$(".portfolio-works__box").addClass("service-info-complete anim-portfolio--scale");
			} 
		}
	})
})
