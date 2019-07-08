import $ from 'jquery';

function circleOffset(counter, precent) {
	let no = 0;
	let pointToFill = 4.72;
	let cw = counter.canvas.width;
	let ch = counter. canvas.height;
	let diff;

	function fillCounter() {
		diff = ((no/100) * Math.PI*2*10);
		counter.clearRect(0,0,cw,ch);
		counter.lineWidth = 10;
		counter.fillStyle = '#666';
		counter.strokeStyle = '#FF5252';
		counter.textAlign = 'center';
		counter.font = '200 22px sans-serif';
		counter.fillText(no + '%',90,100);
		counter.beginPath();
		counter.arc(90,90,80,pointToFill,diff/10+pointToFill);
		counter.stroke();

		if(no >= precent) {
			clearTimeout(fill);
		}

		no++;
	}

	let fill = setInterval(fillCounter, 50);
}

export {circleOffset};
