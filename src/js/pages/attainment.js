import $ from 'jquery';
import {circleOffset} from '../module/circleOffset';

export default $(() => {
	const circleHtml = document.getElementsByClassName('progress-ring')[0].getContext("2d");
	const circleCss = document.getElementsByClassName('progress-ring')[1].getContext("2d");
	const circleSass = document.getElementsByClassName('progress-ring')[2].getContext("2d");
	const circleBootstrap = document.getElementsByClassName('progress-ring')[3].getContext("2d");
	const circleJs = document.getElementsByClassName('progress-ring')[4].getContext("2d");
	const circleJQuery = document.getElementsByClassName('progress-ring')[5].getContext("2d");
	const circleGit = document.getElementsByClassName('progress-ring')[6].getContext("2d");
 
	$(window).scroll(() => {
		const windowHeight = $(window).height();
		const windowScrollPosTop = $(window).scrollTop();
		const windowScrollPosBottom = windowHeight + windowScrollPosTop;
		
		const descAttainment = $("#descAttainment").offset();
		const descAttainmentTop = descAttainment.top; 

		const skin = $(".skin").offset();
		const skinTop = skin.top;

		if (!$("#descAttainment").hasClass("desc-attainment-complete")) {
			if (windowScrollPosBottom > descAttainmentTop) {
				$("#descAttainment").addClass("desc-attainment-complete anim-attainment--bottom");
			} 
		}

		if (!$(".skin").hasClass("scin-complete")) {
			if (windowScrollPosBottom > skinTop) {
				$(".skin").addClass("scin-complete");

				circleOffset(circleHtml, 80);
				circleOffset(circleCss, 81);
				circleOffset(circleSass, 80);
				circleOffset(circleBootstrap, 72);
				circleOffset(circleJs, 65);
				circleOffset(circleJQuery, 63);
				circleOffset(circleGit, 25);
			} 
		}
	})
})
