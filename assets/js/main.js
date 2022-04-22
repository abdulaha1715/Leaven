;(function($) {
    'use strict';

    jQuery(document).ready(function($) {
        console.log('hello');
        // Dropdown Arrow
        $('.leaven__main_menu nav ul li ul').addClass('submenu');
        $('.leaven__main_menu nav ul li ul').before('<span><i class="fa fa-angle-down"></i></span>');

        // Hero Area Slider
        $('.leaven__hero_area').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 4000,
            autoplay: true,
            autoplaySpeed: 2000,
        });

        // Carousel Most View Product
        $('.leaven__most_view_carousel').slick({
            centerMode: true,
            arrows: true,
            centerPadding: '0px',
            slidesToShow: 3,
            prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
            nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        arrows: true,
                        centerMode: true,
                        centerPadding: '0px',
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: true,
                        centerMode: false,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                }
            ]
        });

        // Hero Area Slider
        $('.leaven__payment_carousel').slick({
            dots: false,
            arrows: false,
            infinite: true,
            slidesToShow: 4,
            speed: 2000,
            autoplay: true,
            autoplaySpeed: 1000,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                        centerMode: false,
                        centerPadding: '40px',
                        slidesToShow: 2
                    }
                },
            ]
        });

        $(function() { 
            (function quantityProducts() {
                var $quantityArrowMinus = $(".leaven__quantity_arrow_minus");
                var $quantityArrowPlus = $(".leaven__quantity_arrow_plus");
                var $quantityNum = $(".leaven__quantity_num");

                $quantityArrowMinus.click(quantityMinus);
                $quantityArrowPlus.click(quantityPlus);

                function quantityMinus() {
                if ($quantityNum.val() > 1) {
                $quantityNum.val(+$quantityNum.val() - 1);
                }
                }

                function quantityPlus() {
                $quantityNum.val(+$quantityNum.val() + 1);
                }
            })();

        });

    });

}(jQuery));

