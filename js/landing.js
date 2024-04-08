$(document).ready(() => {
    let swiperBeforeAfter = new Swiper('.swiper-before-after', {
        slidesPerView: 3,
        allowTouchMove: false,
        spaceBetween: 20,
        centeredSlides: true,
        initialSlide: 1,
        navigation: {
            nextEl: '.examples__swiper-arrows .swiper-button-next',
            prevEl: '.examples__swiper-arrows .swiper-button-prev'
        }
    });

    let swiperReviews = new Swiper('.swiper-reviews', {
        slidesPerView: 2,
        allowTouchMove: false,
        navigation: {
            nextEl: '.reviews__swiper-arrows .swiper-button-next',
            prevEl: '.reviews__swiper-arrows .swiper-button-prev'
        },
        breakpoints: {
            1400: {
                slidesPerView: 3
            }
        }
    });

    let swiperLicenses = new Swiper('.swiper-licenses', {
        slidesPerView: 4,
        spaceBetween: 5,
        pagination: {
            el: '.licenses .swiper-pagination',
            clickable: true
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