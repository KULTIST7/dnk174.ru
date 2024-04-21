$(document).ready(() => {
    let swiperBeforeAfter = new Swiper('.swiper-before-after', {
        slidesPerView: 1,
        allowTouchMove: false,
        spaceBetween: 20,
        centeredSlides: false,
        initialSlide: 1,
        navigation: {
            nextEl: '.examples__swiper-arrows .swiper-button-next',
            prevEl: '.examples__swiper-arrows .swiper-button-prev'
        },
        breakpoints: {
            999: {
                slidesPerView: 3,
                centeredSlides: true
            },

            749: {
                slidesPerView: 2
            }
        }
    });

    let swiperReviews = new Swiper('.swiper-reviews', {
        slidesPerView: 1,
        allowTouchMove: false,
        navigation: {
            nextEl: '.reviews__swiper-arrows .swiper-button-next',
            prevEl: '.reviews__swiper-arrows .swiper-button-prev'
        },
        breakpoints: {
            1400: {
                slidesPerView: 3
            },
            1000: {
                slidesPerView: 2
            }
        }
    });

    let swiperLicenses = new Swiper('.swiper-licenses', {
        slidesPerView: 1,
        spaceBetween: 5,
        pagination: {
            el: '.licenses .swiper-pagination',
            clickable: true
        },
        breakpoints: {
            1000: {
                slidesPerView: 4
            },
            750: {
                slidesPerView: 3
            },
            500: {
                slidesPerView: 2
            }
        }
    });

    $('.before-after').twentytwenty();

    Fancybox.bind("[data-fancybox]");

    $('.faq .faq__item__header').on('click', function () {
        const parent = $(this).parent('.faq__item');

        if ($(parent).hasClass('active'))
            return false;
        
        $('.faq .faq__item.active .faq__item__answer').slideUp('fast');
        $('.faq .faq__item.active').removeClass('active');

        const answere = $(parent).find('.faq__item__answer');
        $(answere).slideDown('fast');

        $(parent).addClass('active');

        return false;
    });
});