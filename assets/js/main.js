;(function($) {
	'use strict';

	jQuery(document).ready(function($) {
		console.log('hello');
		// Dropdown Arrow
		$('.leaven__main_menu nav ul li ul').addClass('submenu');
		$('.leaven__main_menu nav ul li ul').before('<span><i class="fa fa-angle-down"></i></span>');

		// Carousel Most View Product
		$('.leaven__most_view_carousel').slick({
		  centerMode: true,
		  arrows: true,
		  centerPadding: '0px',
		  slidesToShow: 3,
          prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
          nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
		  responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        arrows: false,
		        centerMode: true,
		        centerPadding: '40px',
		        slidesToShow: 3
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        arrows: false,
		        centerMode: true,
		        centerPadding: '40px',
		        slidesToShow: 1
		      }
		    }
		  ]
		});

	});

}(jQuery));