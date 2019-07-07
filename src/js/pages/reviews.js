import $ from 'jquery';
import {timeLine} from '../module/timeLine';
import {showSlide} from '../module/showSlide';

export default $(() => {

	timeLine();
	showSlide();

	$(window).scroll(() => {
		const windowHeight = $(window).height();
		const windowScrollPosTop = $(window).scrollTop();
		const windowScrollPosBottom = windowHeight + windowScrollPosTop;
		
		const descReviews = $("#descReviews").offset();
		const descReviewsTop = descReviews.top;

		if (!$("#descReviews").hasClass("desc-call-complete")) {
			if (windowScrollPosBottom > descReviewsTop) {
				$("#descReviews").addClass("desc-reviews-complete anim-reviews--bottom");
			} 
		}
	})
})
