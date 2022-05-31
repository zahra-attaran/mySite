$(document).ready(function ($) {

    $(".iconMobileMenu").click(function(){
        $(".menu").slideToggle(100);
    });
    $(".subBtnMenu").on("click", function () {
        $(".secdownload").addClass("trnsorm-unset");
        $(".secdownload").addClass("transition-set");
        $(".btnMenu").attr("style", "display:none");
    });
    $("#close").on("click", function () {
        $(".secdownload").removeClass("trnsorm-unset");
        // $( ".secdownload" ).addClass( "transition-set");
        $(".btnMenu").removeAttr("style");
    });

    $.fn.isInViewport = function (x) {
        return $(this).position().top - (x) <= $(window).scrollTop();
    };
    //animates

    $.fn.isInView = function () {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(this).offset().top;
        var elemBottom = elemTop + $(this).height()/2;

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    };
    //
    $('.nav li a').on('click', function () {
        var y = $(this).attr('data-value');
        var z = $('#' + y).offset().top;
        $('html , body').animate({
            scrollTop: z
        }, 100);
        $('.nav li a').removeClass('active')
        $(this).addClass('active');
    });


    var owl = $('.owl-carouselCustomerComment');
    owl.on('initialize.owl.carousel initialized.owl.carousel ' +
        'initialize.owl.carousel initialize.owl.carousel ' +
        'resize.owl.carousel resized.owl.carousel ' +
        'refresh.owl.carousel refreshed.owl.carousel ' +
        'update.owl.carousel updated.owl.carousel ' +
        'drag.owl.carousel dragged.owl.carousel ' +
        'translate.owl.carousel translated.owl.carousel ' +
        'to.owl.carousel changed.owl.carousel',
        function (e) {
            $('.' + e.type)
                .removeClass('secondary')
                .addClass('success');
            window.setTimeout(function () {
                $('.' + e.type)
                    .removeClass('success')
                    .addClass('secondary');
            }, 500);
        });
    owl.owlCarousel({
        loop: true,
        nav: true,
        lazyLoad: true,
        margin: 10,
        video: true,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        rtl:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            960: {
                items: 1,
            },
            1200: {
                items: 1
            }
        }
    });
    var owlMain = $('.owl-carouselMain');
    owlMain.on('initialize.owl.carousel initialized.owl.carousel ' +
        'initialize.owl.carousel initialize.owl.carousel ' +
        'resize.owl.carousel resized.owl.carousel ' +
        'refresh.owl.carousel refreshed.owl.carousel ' +
        'update.owl.carousel updated.owl.carousel ' +
        'drag.owl.carousel dragged.owl.carousel ' +
        'translate.owl.carousel translated.owl.carousel ' +
        'to.owl.carousel changed.owl.carousel',
        function (e) {
            $('.' + e.type)
                .removeClass('secondary')
                .addClass('success');
            window.setTimeout(function () {
                $('.' + e.type)
                    .removeClass('success')
                    .addClass('secondary');
            }, 500);
        });
    owlMain.owlCarousel({
        loop: true,
        nav: true,
        lazyLoad: true,
        // margin: 10,
        video: true,
        autoplay: true,
        autoplayTimeout: 60000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            960: {
                items: 1,
            },
            1200: {
                items: 1
            }
        }
    });


    var owlBlog = $('.owl-carouselBlog');
    owlBlog.on('initialize.owl.carousel initialized.owl.carousel ' +
        'initialize.owl.carousel initialize.owl.carousel ' +
        'resize.owl.carousel resized.owl.carousel ' +
        'refresh.owl.carousel refreshed.owl.carousel ' +
        'update.owl.carousel updated.owl.carousel ' +
        'drag.owl.carousel dragged.owl.carousel ' +
        'translate.owl.carousel translated.owl.carousel ' +
        'to.owl.carousel changed.owl.carousel',
        function (e) {
            $('.' + e.type)
                .removeClass('secondary')
                .addClass('success');
            window.setTimeout(function () {
                $('.' + e.type)
                    .removeClass('success')
                    .addClass('secondary');
            }, 500);
        });
    owlBlog.owlCarousel({
        // loop: true,
        nav: true,
        lazyLoad: true,
        // margin: 10,
        video: true,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        rtl:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            960: {
                items: 3,
            },
            1200: {
                items: 4
            }
        }
    });
    var owlCompany = $('.owl-carouselCompany');
    owlCompany.on('initialize.owl.carousel initialized.owl.carousel ' +
        'initialize.owl.carousel initialize.owl.carousel ' +
        'resize.owl.carousel resized.owl.carousel ' +
        'refresh.owl.carousel refreshed.owl.carousel ' +
        'update.owl.carousel updated.owl.carousel ' +
        'drag.owl.carousel dragged.owl.carousel ' +
        'translate.owl.carousel translated.owl.carousel ' +
        'to.owl.carousel changed.owl.carousel',
        function (e) {
            $('.' + e.type)
                .removeClass('secondary')
                .addClass('success');
            window.setTimeout(function () {
                $('.' + e.type)
                    .removeClass('success')
                    .addClass('secondary');
            }, 500);
        });
    owlCompany.owlCarousel({
        // loop: true,
        nav: true,
        lazyLoad: true,
        // margin: 10,
        video: true,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        rtl:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            960: {
                items: 3,
            },
            1200: {
                items: 4
            }
        }
    });

    $("#play").click(function () {
        jQuery("#video").trigger('play');
        jQuery(".playVideo").fadeOut(1000);
    });
    $('#video').on('ended', function () {
        jQuery(".playVideo").fadeIn(1000);
    });


});
// $(window).scroll(function () {
//     var y1 = $(window).scrollTop();
//     console.log('llllllllllllllll'+y1)
//     if ($(window).scrollTop()> 500) {
//         $(".nav").addClass('displayfixe');
//         var y2 = $(window).scrollTop();
//
//         console.log('bbbbbbbbbbbbbbbb'+y2);
//     }
// });


var y1 = 0;
$(window).scroll(function () {
    if ($(window).scrollTop() > 80) {
        if (y1 <= ($(window).scrollTop())) {
            $(".nav").addClass('displayfixe');
            $(".nav").removeClass('displayfixenone');
        } else {
            // $(".nav").removeClass('displayfixe');
            $(".nav").addClass('displayfixenone');
            $(".nav").removeClass('displayfixe');
        }
    } else {
        $(".nav").removeClass('displayfixenone');
        $(".nav").removeClass('displayfixe');

    }
    y1 = ($(window).scrollTop());

    $('section').each(function () {
        if ($(this).isInViewport(100) && !$(this).hasClass("video")) {

            $('.nav li a').removeClass('active');
            $('[data-value='+$(this).attr('id')+']').addClass('active');
            // console.log($(this).isInViewport(100));
            console.log($(this).attr('id'));
            // $(this).addClass('active');
        }
    });

//     $('section').each(function (){
//         if ($(this).isInView()){
// // $('.video').addClass(("fadeShow"));
// //             $('.hedproduct').addClass(("fadeShow"));
// //             $(this).find(".fadeing").addClass("fadeShow");
//
//         }
//     })


    $(".fadeing").each(function () {
            if($(this).parent().isInView()){
                $(this).addClass('fadeShow');
            }

        else if($(this).isInView()){
            $(this).addClass('fadeShow');
        }
    });

    $(".hasFadeParent").each(function () {
        var that=$(this);
        if($(that).isInView()){
            let counter=100;
            $(that).find(".hasChildFade").each(function () {
                var child=$(this);
                setTimeout(function () {
                    $(child).addClass("fadeShow");
                },counter);
                counter+=500;
            });
        }
    });
// $(".btnMobileMenu").onclick


});

