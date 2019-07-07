import $ from 'jquery';

navMaker((topMenuHeight, menuItems, section) => {

	$(document).on('scroll', (() => {
		const currentScrollPos = $(document).scrollTop();
		
		section.each((() => {
			const self = $(this);

			if (self.offset().top < (currentScrollPos + topMenuHeight) && (currentScrollPos + topMenuHeight) < (self.offset().top + self.outerHeight())) {
				const targetClass = '#' + self.attr('id') + 'Link';
				menuItems.removeClass('active');
				$(targetClass).addClass('active');
			}
		}))
	}))
})

export {navMaker};
