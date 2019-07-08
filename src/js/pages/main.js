import $ from 'jquery';
import {scrollAnimate} from '../module/scrollAnimate';

export default $(() => {
	const menuItems = $("#scrollToAbout");

	scrollAnimate(menuItems);
})
