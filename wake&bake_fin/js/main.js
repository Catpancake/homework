

(function () {

    // ------------------
    // burger-menu 
    // ------------------
    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }
    }

    // ------------------
    // modal-window
    // ------------------

    const modal = document.querySelector('.modal')
    const modalButton = document.querySelector('.about-control')

    modalButton.addEventListener('click', openModal)
    modal.addEventListener('click', closeModal)

    function openModal(e) {
        e.preventDefault()
        document.body.classList.toggle('body--opened-modal')
    }

    function closeModal(e) {
        e.preventDefault()

        const target = e.target

        if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
            document.body.classList.remove('body--opened-modal')
        }

    }

    // ------------------
    // tab-menu
    // ------------------

    const tabControls = document.querySelector('.tab-controls')

    tabControls.addEventListener('click', toggleTab)

    function toggleTab(event) {

        const tabControl = event.target.closest('.tab-controls__link')

        if (!tabControl) return
        event.preventDefault()
        if (tabControl.classList.contains('tab-controls__link--active')) return

        const tabContentID = tabControl.getAttribute('href')

        document.querySelector('.tab-content--show').classList.remove('tab-content--show')
        document.querySelector(tabContentID).classList.add('tab-content--show')

        document.querySelector('.tab-controls__link--active').classList.remove('tab-controls__link--active')
        tabControl.classList.add('tab-controls__link--active')
    }

    // ------------------
    // accordion
    // ------------------

    //выбор всех элементов аккарда
    const accordionLists = document.querySelectorAll('.accordion-list');

    //обработка события клика для каждого аккарда
    accordionLists.forEach(el => {
        el.addEventListener('click', (e) => {


            //получение текущего аккарда и открытого элемента. e.currentTarget— это элемент, на котором произошло событие (текущий аккордеон). Затем мы ищем открытый элемент в этом аккордеоне.
            const accordionList = e.currentTarget;
            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened');

            //поиск элемента управления
            //ищем ближайший элемент управления (кнопку или заголовок), на который кликнули. Если клик был не по элементу управления, просто выходим из функции.
            const accordionControl = e.target.closest('.accordion-list__control');
            if (!accordionControl) return;

            //получение текущего элемента аккарда и его содержимого.
            //родительский элемент (весь элемент аккордеона) и его содержимое (контент, который нужно показать или скрыть).
            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;

            // Закрываем открытый элемент, если он есть.
            //Если существует открытый элемент, который не является текущим, мы закрываем его. Удаляем класс, который указывает на то, что элемент открыт, и сбрасываем его высоту, чтобы скрыть содержимое.
            if (accordionOpenedItem && accordionOpenedItem !== accordionItem) {
                accordionOpenedItem.classList.remove('accordion-list__item--opened');
                const openedContent = accordionOpenedItem.querySelector('.accordion-list__content');
                if (openedContent) {
                    openedContent.style.maxHeight = null;
                }
            }

            // Открываем или закрываем текущий элемент.
            //Сначала проверяем, открыт ли текущий элемент. Затем с помощью classList.toggle переключаем класс, который указывает на открытость элемента. Если элемент открывается, устанавливаем его высоту равной полному содержимому (с помощью scrollHeight), чтобы показать его. Если закрывается, сбрасываем высоту.
            const isOpen = accordionItem.classList.contains('accordion-list__item--opened');
            accordionItem.classList.toggle('accordion-list__item--opened', !isOpen);
            if (!isOpen) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null;
            }
        });
    });
    // ------------------
    // slider-gallery
    // ------------------

    const swiper = new Swiper('.gallery__slider', {
        // Optional parameters
        spaceBetween: 15,
        slidesPerView: 1.5,

        // If we need pagination
        pagination: {
            el: '.gallery__pagination',
            type: 'fraction',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.gallery__next',
            prevEl: '.gallery__prev',
        },

        breakpoints: {
            601: {
                slidesPerView: 3,
            },
            801: {
                sspaceBetween: 32,
            },
            // when window width is >= 1101px
            1101: {
                slidesPerView: 4,
            }
        }
    });


    new Swiper('.testimonials__slider', {
        // Optional parameters
        spaceBetween: 0,
        slidesPerView: 1,
        centeredSlides: true,


        // Navigation arrows
        navigation: {
            nextEl: '.testimonials__next',
            prevEl: '.testimonials__prev',
        },

        breakpoints: {

            901: {
                slidesPerView: 1.5,
            },
            1201: {
                slidesPerView: 2.1,
            },
        },

        scrollbar: {
            el: '.testimonials__scrollbar',
            draggable: true,
        },
    });

    // ------------------
    // inputmasktel
    // ------------------

    const telInput = document.querySelectorAll('input[type="tel"]')
    const im = new Inputmask('+7 (999) 999-99-99')
    im.mask(telInput)
})()



