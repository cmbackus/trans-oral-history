var personIds = ["metzler", "bills", "delaney", "barres", "waters", "otoole", "archived"];

//carousel audio
$('#metzlerSlide').on('slide', function (e) {
    console.log("metzlerSlide clicked");
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
$('.refreshIframe').click(function () {
        console.log("refreshing iframe")
        $(this).parents("iframe").html("<iframe width='100%' height='166' scrolling='no' frameborder='no' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/258889676&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;show_artwork=false'></iframe>")
            //$('iframe').attr('src', $('iframe').attr('src'));
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
$('#metzler').click(function () {
    //$('iframe').attr('src', $('iframe').attr('src'));
    console.log("metzler clicked")
    $('#metzlerSlide').carousel(0);
    $('#metzlerSection').removeClass("hideSection")
    $('#people').addClass("hideSection")

})

$('#bills').click(function () {
    console.log("metzler clicked")
    $('#billsSlide').carousel(0);
    $('#billsSection').removeClass("hideSection")
    $('#people').addClass("hideSection")

})
$('#barres').click(function () {
    $('#barresSlide').carousel(0);
    $('#barresSection').removeClass("hideSection")
    $('#people').addClass("hideSection")

})
$('#delaney').click(function () {
    $('#delaneySlide').carousel(0);
    $('#delaneySection').removeClass("hideSection")
    $('#people').addClass("hideSection")

})
$('#waters').click(function () {

    $('#watersSection').removeClass("hideSection")
    $('#people').addClass("hideSection")

})
$('#otoole').click(function () {
    $('#watersSlide').carousel(0);
    $('#otooleSection').removeClass("hideSection")
    $('#people').addClass("hideSection")

})
$('#archived').click(function () {
    $('#archivedSlide').carousel(0);
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
    $('#communitySection').removeClass("hideSection")
    $('#topics').addClass("hideSection")

})
$('#workplace').click(function () {
    $('#workplaceSlide').carousel(0);
    $('#workplaceSection').removeClass("hideSection")
    $('#topics').addClass("hideSection")

})
$('#healthcare').click(function () {
    $('#healthcareSlide').carousel(0);
    $('#healthcareSection').removeClass("hideSection")
    $('#topics').addClass("hideSection")

})
$('#political').click(function () {
    $('#politicalSlide').carousel(0);
    $('#politicalSection').removeClass("hideSection")
    $('#topics').addClass("hideSection")

})
$('#transparenthood').click(function () {
    $('#transparenthoodSlide').carousel(0);
    $('#transparenthoodSection').removeClass("hideSection")
    $('#topics').addClass("hideSection")

})
$('#visibility').click(function () {
    $('#visibilitySlide').carousel(0);
    $('#visibilitySection').removeClass("hideSection")
    $('#topics').addClass("hideSection")

})