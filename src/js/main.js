
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 25,
    pagination: {
        el: ".swiper-pagination",
        type: 'bullets',
        clickable: true,
    },
    breakpoints: {
        1200: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 3,
        },

        992: {
            slidesPerView: 2,
        },

        768: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 1,
        },

        425: {
            slidesPerView: 1,
        },
        375: {
            slidesPerView: 1,
        },

        320: {
            slidesPerView: 1,
        },


    },


    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


let burger = $('.burger');
let navigation = $('.header__row');
let close =$('.window__close');


burger.on('click', function () {
    burger.toggleClass('burger_active');
    navigation.toggleClass('header__row_active');
});

let button = $('.btn');
let overlay =$('.overlay');
let second =$('.send');
let form =$('.window__form');
let thanks =$('.window__thanks');

button. on('click', function () {
    thanks.fadeOut('slow');
    overlay.fadeIn('slow');
    form.fadeIn('slow');
});

close.on('click', function () {
    overlay.fadeOut('slow');
    form.fadeOut('slow');

});

second.on('click', function (e) {
    e.preventDefault();
    overlay.fadeOut('slow');
    form.fadeOut('slow');
    overlay.fadeIn('slow');
    thanks.fadeIn('slow');
});
AOS.init({
    duration: 1200,
});


