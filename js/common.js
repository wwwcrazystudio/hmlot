$(function() {


    //добавление иконки закрытия в поисковую форму
    $(".search-form").each(function() {

        var $inp = $(this).find('input[type="search"]'),
            $cle = $(this).find(".search-form__clear");

        $inp.on("input", function(){

            if ( $(this).val().length > 0 ) {
                $cle.css('display', 'flex');
            }

            else{
                $cle.css('display', 'none');
            }

        });

        $cle.on("touchstart click", function(e) {
            e.preventDefault();
            $inp.val("").trigger("input");
        });

    });


    $(window).on('resize', remoVisibleMenuProductCardMobile);
    remoVisibleMenuProductCardMobile();
    function remoVisibleMenuProductCardMobile() {
        if ( $(window).width() < 993 ) {
            $(".categories-menu--product-card").removeClass('is-active');
        }
    }

    // выбор города
    $(".city-drop__item").on('click', function () {

        var text = $(this).text();

        $(this).addClass('is-active').siblings().removeClass('is-active');

        $(this).closest('.city').find('.city-toggler__text').text(text);

    });


    $(".city-toggler").on('click', function () {

        $(this).toggleClass('is-active');

       $(this).next('.city-drop').toggleClass('is-active');

    });


    //закрытие выбора города при клике на любой елемент страницы, кроме самого выбора города
    $(document).on('click', function (event) {

        if ( !$(event.target).closest('.city').length) {
            $(".city-drop,.city-toggler").removeClass('is-active');
        }

    });


    //  сслайдер баннеров
    $("#js-banner-slider").slick({
        slidesToShow:3,
        slidesToScroll:1,
        prevArrow: '.banner-slider__control--prev',
        nextArrow: '.banner-slider__control--next',
    });


    //меню категорий
    $(".categories-menu-toggler").on('click', function () {

        $(this).toggleClass('is-active');

        if ( $("#categories-menu").hasClass('is-active') ) {
            $("#categories-menu").removeClass('is-active');
        }
        else{
            $("#categories-menu").addClass('is-active');
        }

    });


    $('.page-inner').not('.page-inner--product-card').on('click', function (event) {

        if ( !$(event.target).closest('.categories-menu-toggler, .categories-menu-wrapper').length) {
            $("#categories-menu,.categories-menu-toggler").removeClass('is-active');
        }

    });

    $("#cookies-msg").fadeIn();

    // сообщение о наличии куки
    $(".cookies-msg__assept-msg, .cookies-msg__close").on('click', function () {

        $("#cookies-msg").fadeOut();

    });

    $(document).on('click', function (event) {

        if ( !$(event.target).closest('#cookies-msg').length) {
            $("#cookies-msg").fadeOut();
        }

    });


    $(".test__item").on('click', function () {
       $(".test-drop").addClass('is-active');
    });


    $(window).on('resize',slideCategoriesSubpanel);

    slideCategoriesSubpanel();
    function slideCategoriesSubpanel() {

        if ( $(window).width() < 993 ) {

            $(".categories-menu__list a").on('click', function (event) {
                event.preventDefault();
                $(this).next('.categories-menu__list--subpanel').addClass('is-active');
            });

            $(".categories-menu__list-title").on('click', function () {

                $(this).closest('.categories-menu__list--subpanel').removeClass('is-active');

            })

        }

    };



//    форма логина

    $(".login-popup-form__input").on('input', function () {

        if ( $(this).val().length > 0 ) {

            $(this).closest('.login-popup-form').find('.login-popup-form__submit').attr('disabled', false);

           $(this).siblings('.login-popup-form__animated-icon').css('display', 'flex');

        }

        else{

            $(this).closest('.login-popup-form').find('.login-popup-form__submit').attr('disabled', true);

            $(this).siblings('.login-popup-form__animated-icon').css('display', 'none');

        }

    });


    $(".login-popup-form__submit").on('click', function () {

        $(this).closest('.login-popup').find('.login-popup-form__animated-icon').css('display', 'none');

        $(this).closest('.login-popup').find('.login-popup-form__authorization').fadeIn();

        $(this).css('opacity', '0');

    });



    //слайдер  на странице product-card

    $(".goods-item .goods-item-preview__header").slick({
        prevArrow: '.goods-item-preview__control--prev',
        nextArrow: '.goods-item-preview__control--next',
        fade: true,
    });


    //скрытие одного из блоков в сайдбаре на странице reserve


    $(".reserve-aside__close").on('click', function () {

        $(this).closest('.reserve-aside__block').fadeOut();

    });


});