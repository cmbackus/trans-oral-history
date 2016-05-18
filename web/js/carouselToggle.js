var personIds = ["metzler", "bills", "delaney", "barres", "waters", "otoole", "archived"];
window.onload = function () {

    //console.log("in onload")
    $("#introSlide").children(".slideInfo").first().fadeIn("slow", function () {
        // Animation complete
    });
    //loadFramesWithin('#metzlerSlide');
    $('.carousel').each(function () {
        $(this).carousel({
            pause: true
            , interval: false
        });
    });

}

function loadFramesWithin(divName) {
    $(divName).find('.carouselFrame').each(function () {
        console.log("in loadframeswithin")
            // console.log($(this).attr("data-url"));
            // console.log($(this).attr("src"));
        $(this).attr('src', $(this).attr('data-url'));
    });

}
//intro alt navigation
$("#continue0").on('click', function () {
    $('#introSlide').carousel(1);
})
$("#continue1").on('click', function () {
    $('#introSlide').carousel(2);
})
$("#continue2").on('click', function () {
        $('#introSlide').carousel(3);
    })
    //general carousel toggle function
function toggleCarousel(name, section) {
    //$('iframe').attr('src', $('iframe').attr('src'));
    console.log(name + "clicked")
    $('#' + name + 'Slide').carousel(0);
    loadFramesWithin('#' + name + 'Slide');
    // $('#metzlerSlide').find(".slideInfo").hide().fadeIn(600); //.addClass("hidden"); //metzlerInfo0
    $("#" + name + "Info0").hide().fadeIn(500);
    //$('#metzlerSlide').find(".metzlerInfo0").addClass("fadeInBG");
    $('#' + name + 'Section').removeClass("hideSection")
    $('#' + section).addClass("hideSection")

}
//carousel audio
$('#metzlerSlide').on('slide', function (e) {
    //console.log("metzlerSlide clicked");
    //var xx = $(this);
    //setTimeout(function () {
    //    xx.find('.active').next().find('.slab').slabText();
    // }, 0);
});
//glossary carousel

$('.glossaryLink').click(function (e) {
    // console.log($(this).data('id'));

    $('#glossarySlide').carousel($(this).data('id'));


})

//people carousel
/*for (var i = 0; i > personIds; i++) {
    $('#' + personIds[i]).click(function () {
        console.log(personIds[i] + " clicked")
        $('#' + personIds[i] + 'Section').removeClass("hideSection")
        $('#people').addClass("hideSection")

    })

}*/

/*$('#metzler').click(function () {
    console.log("metzler clicked")
    $('#metzlerSection').removeClass("hideSection")
    $('#people').addClass("hideSection")

})*/
//select sections
$()
$('#metzler').click(function () {
    //$('iframe').attr('src', $('iframe').attr('src'));
    console.log("metzler clicked")
    $('#metzlerSlide').carousel(0);
    loadFramesWithin('#metzlerSlide');
    // $('#metzlerSlide').find(".slideInfo").hide().fadeIn(600); //.addClass("hidden"); //metzlerInfo0
    $("#metzlerInfo0").hide().fadeIn(500);
    //$('#metzlerSlide').find(".metzlerInfo0").addClass("fadeInBG");
    $('#metzlerSection').removeClass("hideSection")
    $('#people').addClass("hideSection")

})

$('#bills').click(function () {
    console.log("metzler clicked")
    $('#billsSlide').carousel(0);
    loadFramesWithin('#billsSlide');
    $("#billsInfo0").hide().fadeIn(500);
    $('#billsSection').removeClass("hideSection")
    $('#people').addClass("hideSection")

})
$('#barres').click(function () {
    $('#barresSlide').carousel(0);
    loadFramesWithin('#barresSlide');
    $("#barresInfo0").hide().fadeIn(500);
    $('#barresSection').removeClass("hideSection")
    $('#people').addClass("hideSection")

})
$('#delaney').click(function () {
    $('#delaneySlide').carousel(0);
    loadFramesWithin('#delaneySlide');
    $("#delaneyInfo0").hide().fadeIn(500);
    $('#delaneySection').removeClass("hideSection")
    $('#people').addClass("hideSection")

})
$('#waters').click(function () {
    $('#watersSlide').carousel(0);
    loadFramesWithin('#watersSlide');
    $("#watersInfo0").hide().fadeIn(500);
    $('#watersSection').removeClass("hideSection")
    $('#people').addClass("hideSection")

})
$('#otoole').click(function () {
    $('#otooleSlide').carousel(0);
    loadFramesWithin('#otooleSlide');
    $("#otooleInfo0").hide().fadeIn(500);
    $('#otooleSection').removeClass("hideSection")
    $('#people').addClass("hideSection")

})
$('#archived').click(function () {
    $('#archivedSlide').carousel(0);
    //loadFramesWithin('#archivedSlide');
    $("#archivedInfo0").hide().fadeIn(500);
    $('#archivedSection').removeClass("hideSection")
    $('#people').addClass("hideSection")

})
$('.personClose').click(function () {
        console.log("close clicked")
        $('.PeopleCarouselSection').addClass("hideSection")
        $('#people').removeClass("hideSection")

    })
    //topics carousel
$('.topicClose').click(function () {
    console.log("close clicked")

    $('.TopicCarouselSection').addClass("hideSection")
    $('#topics').removeClass("hideSection")

})

$('#community').click(function () {
    $('#communitySlide').carousel(0);
    loadFramesWithin('#communitySlide');
    $('#communitySection').removeClass("hideSection")
    $('#topics').addClass("hideSection")

})
$('#workplace').click(function () {
    $('#workplaceSlide').carousel(0);
    loadFramesWithin('#workplaceSlide');
    $('#workplaceSection').removeClass("hideSection")
    $('#topics').addClass("hideSection")

})
$('#healthcare').click(function () {
    $('#healthcareSlide').carousel(0);
    loadFramesWithin('#healthcareSlide');
    $('#healthcareSection').removeClass("hideSection")
    $('#topics').addClass("hideSection")

})
$('#political').click(function () {
    $('#politicalSlide').carousel(0);
    loadFramesWithin('#politicalSlide');
    $('#politicalSection').removeClass("hideSection")
    $('#topics').addClass("hideSection")

})
$('#transparenthood').click(function () {
    $('#transparenthoodSlide').carousel(0);
    loadFramesWithin('#transparenthoodSlide');
    $('#transparenthoodSection').removeClass("hideSection")
    $('#topics').addClass("hideSection")

})
$('#visibility').click(function () {
        $('#visibilitySlide').carousel(0);
        loadFramesWithin('#visibilitySlide');
        $('#visibilitySection').removeClass("hideSection")
        $('#topics').addClass("hideSection")

    })
    //read mores
$('.readMoreBtn').click(function () {
    console.log("in read more");
    $(this).parents('.readLess').siblings('.readMore').removeClass("hideSection");
    $(this).parents('.readLess').addClass("hideSection");

})
$('.readLessBtn').click(function () {
        console.log("in read more");
        $(this).parents('.readMore').siblings('.readLess').removeClass("hideSection");
        $(this).parents('.readMore').addClass("hideSection");

    })
    //close carousel on last slide
function checkItem(slideId) {
    var $this;
    $this = $(slideId);
    if ($("" + slideId + " .carousel-inner .item:first").hasClass("active")) {
        $this.children(".left").hide();
        $this.children(".right").show();
    } else if ($("" + slideId + " .carousel-inner .item:last").hasClass("active")) {
        $this.children(".right").hide();
        $this.children(".left").show();
    } else {
        $this.children(".carousel-control").show();
    }
};