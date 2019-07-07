import $ from 'jquery';
import {scrollAnimate} from '../module/scrollAnimate';

export default $(() => {
	const menuItems = $("#scrollToService");

	scrollAnimate(menuItems);
})
