$(document).ready(function () {


    $('.menu').on('click', function (e) {
        $('.menu1').removeClass('invisible scale-0')
        e.preventDefault();
    });
    $('.close').on('click', function (e) {
        $('.menu1').addClass('invisible scale-0')
        e.preventDefault();
    });

    $('.search').on('click', function (e) {
        $('.search1').removeClass('invisible scale-0')
        e.preventDefault();
    });
    $('.search-close').on('click', function (e) {
        $('.search1').addClass('invisible scale-0')
        e.preventDefault();
    });


    $('.view-grid').on('click', function (e) {
        $('.remove-adde').removeClass('flex space-x-6'),
            $('.view').addClass('grid grid-cols-3'),
            $('.view-hide').addClass('hidden'),

            e.preventDefault();
    });


    $('.responsive').slick({
        dots: true,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });


    $('.center').slick({
        arrows: false,
        centerMode: true,
        centerPadding: '200px',
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '100px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '100px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 510,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '100px',
                    slidesToShow: 1,
                    centerMode: false,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1
                }
            }
        ]
    });
});

feather.replace()


var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
});




