(function () {

    document.addEventListener('click', ({target}) => {
    const width = document.documentElement.clientWidth;
    const body = document.body;

    const burger = target.closest('.burger-icon');
    if (burger && width <= 900) {
        body.classList.toggle('body--opened-menu');
        return;
    }

    const mobileBtn = target.closest('.header__buttons--mobile button, .header__buttons--mobile a');
    const nav = target.closest('.header__link');

    if ((mobileBtn || nav) && body.classList.contains('body--opened-menu')) {
        body.classList.remove('body--opened-menu');
    }
});

const hShadow = document.querySelector('.header__wrapper')

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        hShadow.classList.add('headerShadow')
    } else {
        hShadow.classList.remove('headerShadow')
    }
});

    const swiper = new Swiper('.header__slider', {
        // Optional parameters
        loop: true,
        autoplay: {
            delay: 4321,
            disableOnInteraction: false,
        },
    
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
    
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    
    });
    
})()