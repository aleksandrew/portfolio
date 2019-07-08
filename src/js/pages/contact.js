import $ from 'jquery';

export default $(() => {
	$(window).scroll(() => {
		const windowHeight = $(window).height();
		const windowScrollPosTop = $(window).scrollTop();
		const windowScrollPosBottom = windowHeight + windowScrollPosTop;
		
		const descContact = $("#descContact").offset();
		const descContactTop = descContact.top;

		const name = $(".contact-form__text");
		const nameVal = name.val();
		const email = $(".contact-form__email");
		const emailVal = email.val();
		const text = $(".contact-form__text");
		const textVal = text.val();
		const submitBtn = $("form");
		
		if (!$("#descContact").hasClass("desc-contact-complete")) {
			if (windowScrollPosBottom > descContactTop) {
				$("#descContact").addClass("desc-contact-complete anim-contact--bottom");
				$(".contact-form__text").addClass("anim-contact--text"); 
				$(".contact-form__email").addClass("anim-contact--email"); 
				$(".contact-form__textarea").addClass("anim-contact--textarea");
				$(".contact-form__btn").addClass("anim-contact--btn");
			} 
		}
	})
})
