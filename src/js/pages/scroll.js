import $ from 'jquery';
import {scrollAnimate} from '../module/scrollAnimate';
import {navMaker} from '../module/navMaker';

export default $(() => {
	const topMenu = $("#header");
	const topMenuHeight = topMenu.outerHeight();
	const menuItems = topMenu.find("ul a");
	const section = $("section");

	scrollAnimate(menuItems);
	navMaker(topMenuHeight, menuItems, section);
})

