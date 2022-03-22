;(function($) {
	'use strict';

	jQuery(document).ready(function($) {
		console.log('hello');
		$('.leaven__main_menu nav ul li ul').addClass('submenu');
		$('.leaven__main_menu nav ul li ul').before('<span><i class="fa fa-angle-down"></i></span>');
	});

}(jQuery));