$(document).ready(function () {
    //$('iframe')[0].stop();
    var menu = $('#nav');
    var origOffsetY = 200 //$(window).height();


    //document.onscroll = scroll;
    $(".nav a").on("click", function () {
        $('.PeopleCarouselSection').addClass("hideSection")
        $('#people').removeClass("hideSection")
        $('.TopicCarouselSection').addClass("hideSection")
        $('#topics').removeClass("hideSection")
        $('#introSlide').carousel(0);
        $('#analysisSlide').carousel(0);
        $(".nav").find(".active").removeClass("active");
        $(this).parent().addClass("active");
    });
    $(".bottomList").on("click", function () {

        var currenthref = $(this).attr('href');

        $("body, html").animate({
            "scrollTop": $(currenthref).offset().top
        }, 1000);
        return false;

    })
    $("#continue3").on("click", function () {

        var currenthref = '#people';

        $("body, html").animate({
            "scrollTop": $(currenthref).offset().top
        }, 1000);
        return false;

    })
    $('body').scrollspy({
        target: '#nav' - $("#nav").height()
    })


    $("#nav ul li a[href^='#']").click(function () {
        console.log('present');
        var currenthref = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(currenthref).offset().top
        }, 300, function () {
            // window.location.hash = hash;
        });
    });
    $('#introContinue').click(function () {
        var currenthref = "#people";

        $("body, html").animate({
            "scrollTop": $(currenthref).offset().top
        }, 1000);
        return false;
    });
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