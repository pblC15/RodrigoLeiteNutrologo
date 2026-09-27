$(function() {

    //Função para apresentar as fotos em slides
    $(".mosaico .container .mosaico-wraper").slick({
        centerMode: false,
        slidesToShow: 6,
        arrows: false,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 580,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 2
                },
            },
            {
                breakpoint: 380,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1
                },
            }


        ]
    });

    $(".tratamentos .container").slick({
        centerMode: false,
        slidesToShow: 3,
        arrows: false,
        infinite: false,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true,
                    infinite: false,
                    centerMode: false,
                    slidesToShow: 2
                }
            },

            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    dots: true,
                    infinite: false,
                    centerMode: false,
                    slidesToShow: 1
                }
            }
        ]
    });

    $(".depoimentos .container").slick({
        centerMode: false,
        slidesToShow: 1,
        dots: true,
        arrows: false,
        infinite: false
    });

    //Função para fixar o menu as descer o scroll

    var width = $(window).width();

    if (width > 840) {

        var menu = $('header');

        $(window).scroll(function() {

            if ($(this).scrollTop() > 30) {

                menu.addClass('menu-fixo');


            } else {

                menu.removeClass('menu-fixo');

            }
        });
    }


    //Função descer o scrool suave
    $('.menu-desktop a').click(function(e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            targetOffset = $(id).offset().top - 300;
        $('html, body').animate({
            scrollTop: targetOffset
        }, 1000);
    });


});