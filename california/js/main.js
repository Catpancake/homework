(function () {

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {
        const burgerIcon = e.target.closest('.burger-icon')
        const navLink = e.target.closest('.header__link')
        // const dropDownLinks = e.target.closest('.header__dropdown-item a')
        const mobileButton = e.target.closest('.header__buttons--mobile button, .header__buttons--mobile a')

        if (burgerIcon && document.documentElement.clientWidth <= 900) {
            document.body.classList.toggle('body--opened-menu')
            return
        }

        // if (dropDownLinks && document.body.classList.contains('body--opened-menu')) {
        //     document.body.classList.remove('body--opened-menu')
        //     return
        // }

        if (mobileButton && document.body.classList.contains('body--opened-menu')) {
            document.body.classList.remove('body--opened-menu')
            return
        }

        if (
            navLink &&
            document.body.classList.contains('body--opened-menu')
        ) {
            document.body.classList.remove('body--opened-menu')
            return
        }
    }

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