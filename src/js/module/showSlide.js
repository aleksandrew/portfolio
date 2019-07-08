import $ from 'jquery';

function showSlide() {	
	let quote = document.getElementsByClassName("reviews-quote");
	let index = 0;

	show();

	function show() {
		for (let i = 0; i < quote.length; i++) {
			quote[i].style.display="none";
		}
		
		index = index + 1;
		
		if (index > quote.length) {
			index = 1;
		}

		quote[index - 1].style.display="flex";

		setTimeout(show, 8000)
	}
}

export {showSlide};
