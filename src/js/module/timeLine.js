import $ from 'jquery';

function timeLine() {	
	let line = $(".reviews-progressblock__line");
	let index = 0;

	for (let i = 0; i < line.length; i++) {
		line[i].style.width="0";
	}
	
	index = index + 1;
	
	if (index > line.length) {
		index = 1;
	}

	line.animate({
		width: '100%'
	}, 8000, timeLine)
}

export {timeLine};
