// Burger
$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger__menu,.header__burger').toggleClass('active');
    });
});

//  Partner-carousel
$(".partner-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 3000,
    responsive: {
        0: {
            items: 1,
        },
        500: {
            items: 3,
        },
        768: {
            items: 4,
        },
        992: {
            items: 5,
        },
    },
});

//  Main-slide-carousel
$(".section-slide-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 3000,
    responsive: {
        0: {
            items: 1,
        },
        500: {
            items: 1,
        },
        768: {
            items: 1,
        },
        992: {
            items: 1,
        },
    },
});