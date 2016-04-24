$(document).ready(function () {
    var menu = $('#nav');
    var origOffsetY = 0 //$(window).height();


    function scroll() {
        if ($(window).scrollTop() >= origOffsetY) {
            $('#nav').addClass('navbar-fixed-top');
            console.log("made fixed");
            //$('.content').addClass('menu-padding');
        } else {
            $('#nav').removeClass('navbar-fixed-top');
            //$('.content').removeClass('menu-padding');
            console.log("made static");
        }


    }

    document.onscroll = scroll;
    $(".nav a").on("click", function () {
        $(".nav").find(".active").removeClass("active");
        $(this).parent().addClass("active");
    });
    $('body').scrollspy({
        target: '#navbar' + $("#navbar").height()
    })

    /*
     $("#nav ul li a[href^='#']").click(function(){
     console.log('present');
     var link = $(this).attr('href');
     var posi = $(link).offset().top;
     $('html, body').animate({
     scrollTop: $(posi).offset().top
     }, 300, function(){   window.location.hash = hash;
     });
     });*/

    $(function () {


        $(".select").click(function () {
            var currenthref = $(this).attr('href');

            $("body, html").animate({
                "scrollTop": $(currenthref).offset().top
            }, 1000);
            return false;
        });
    })

    $(function () {
        $(".brand").click(function () {
            $("body, html").animate({
                "scrollTop": 0
            }, 1000);
            return false;
        });
    })
});