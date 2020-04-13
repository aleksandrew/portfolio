import $ from 'jquery';
import {circleOffset} from '../module/circleOffset';

export default $(() => {
	const circleHtml = document.getElementsByClassName('progress-ring')[0].getContext("2d");
	const circleCss = document.getElementsByClassName('progress-ring')[1].getContext("2d");
	const circleSass = document.getElementsByClassName('progress-ring')[2].getContext("2d");
	const circleBootstrap = document.getElementsByClassName('progress-ring')[3].getContext("2d");
	const circleJs = document.getElementsByClassName('progress-ring')[4].getContext("2d");
	const circleJQuery = document.getElementsByClassName('progress-ring')[5].getContext("2d");
	const circleReact = document.getElementsByClassName('progress-ring')[6].getContext("2d");
	const circleRedux = document.getElementsByClassName('progress-ring')[7].getContext("2d");
	const circleGit = document.getElementsByClassName('progress-ring')[8].getContext("2d");
 
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

				circleOffset(circleHtml, 85);
				circleOffset(circleCss, 85);
				circleOffset(circleSass, 85);
				circleOffset(circleBootstrap, 80);
				circleOffset(circleJs, 75);
				circleOffset(circleJQuery, 55);
				circleOffset(circleReact, 70);
				circleOffset(circleRedux, 70);
				circleOffset(circleGit, 40);
			} 
		}
	})
})
