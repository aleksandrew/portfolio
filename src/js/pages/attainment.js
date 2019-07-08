import $ from 'jquery';
import {circleOffset} from '../module/circleOffset';

export default $(() => {
	const circleElse = document.getElementsByClassName('progress-ring')[0].getContext("2d");
	const circleDesign = document.getElementsByClassName('progress-ring')[1].getContext("2d");
	const circleMarketing = document.getElementsByClassName('progress-ring')[2].getContext("2d");
	const circleUi = document.getElementsByClassName('progress-ring')[3].getContext("2d");
	const circleUx = document.getElementsByClassName('progress-ring')[4].getContext("2d");

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

				circleOffset(circleElse, 80);
				circleOffset(circleDesign, 90);
				circleOffset(circleMarketing, 50);
				circleOffset(circleUi, 68);
				circleOffset(circleUx, 24);
			} 
		}
	})
})
