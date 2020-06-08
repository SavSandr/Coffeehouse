$(function () {
    
    $('.slider__inner').slick({

        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        speed: 900,
        dots: true

    });




    $('.cooking__tabs .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
            $('.cooking__tabs').find('.tab-item').removeClass('active-tab').hide();
            $('.cooking__tabs .tabs').find('.tab').removeClass('active');
            $(this).addClass('active');
            $('#'+id).addClass('active-tab').fadeIn();
            return false;
    });





});