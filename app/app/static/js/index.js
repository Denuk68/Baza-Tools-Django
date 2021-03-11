// Burger
$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger__menu,.header__burger').toggleClass('active');
    });
});

// Header Burger List
let li_header = document.querySelectorAll(".header__burger__list li");
let a_header = document.querySelectorAll(".header__burger__list li a");
for (let i = 1; i < li_header.length; i++) {
    li_header[i].addEventListener('mouseenter', function () {
        li_header[i].classList.add("hover")
        a_header[i-1].classList.add("hover")
        })
};
for (let i = 1; i < li_header.length; i++) {
    li_header[i].addEventListener('mouseleave', function () {
        li_header[i].classList.remove("hover")        
        a_header[i-1].classList.remove("hover")
        })
};


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