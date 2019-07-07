import $ from 'jquery';
import {scrollAnimate} from '../module/scrollAnimate';

export default $(() => {
	const calltoactionToContact = $("#scrollToContact");

	scrollAnimate(calltoactionToContact);

	$(window).scroll(() => {
		const windowHeight = $(window).height();
		const windowScrollPosTop = $(window).scrollTop();
		const windowScrollPosBottom = windowHeight + windowScrollPosTop;
		
		const calltoaction = $("#calltoaction").offset();
		const calltoactionTop = calltoaction.top;

		if (!$("#calltoaction").hasClass("desc-call-complete")) {
			if (windowScrollPosBottom > calltoactionTop) {
				$("#calltoaction").addClass("desc-call-complete");
				$(".calltoaction__title").addClass("anim-call--title");
				$(".calltoaction__desc").addClass("anim-call--desc");
				$(".calltoaction__btn").addClass("anim-call--btn");
			} 
		}
	})
})

