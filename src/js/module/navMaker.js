import $ from 'jquery';

function navMaker(topMenuHeight, menuItems, section) {

	$(document).on('scroll', function() {
		const currentScrollPos = $(document).scrollTop();
		
		section.each(function() {
			const self = $(this);

			if (self.offset().top < (currentScrollPos + topMenuHeight) && (currentScrollPos + topMenuHeight) < (self.offset().top + self.outerHeight())) {
				const targetClass = '#' + self.attr('id') + 'Link';
				menuItems.removeClass('active');
				$(targetClass).addClass('active');
			}
		})
	})
}

export {navMaker};
