$(document).ready(function () {
    //$('iframe')[0].stop();
    var menu = $('#nav');
    var origOffsetY = 200 //$(window).height();




    document.onscroll = scroll;
    $(".nav a").on("click", function () {
        $('.PeopleCarouselSection').addClass("hideSection")
        $('#people').removeClass("hideSection")
        $('.TopicCarouselSection').addClass("hideSection")
        $('#topics').removeClass("hideSection")
        $(".nav").find(".active").removeClass("active");
        $(this).parent().addClass("active");
    });
    $('body').scrollspy({
        target: '#navbar' - $("#navbar").height()
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
    $('#introContinue').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
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