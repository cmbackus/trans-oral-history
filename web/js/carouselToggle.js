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
    $('#metzlerSection').removeClass("hideSection")
    $('#people').addClass("hideSection")

})
$('#metzler').click(function () {

    $('#metzlerSection').removeClass("hideSection")
    $('#people').addClass("hideSection")

})
$('#bills').click(function () {
    console.log("metzler clicked")
    $('#billsSection').removeClass("hideSection")
    $('#people').addClass("hideSection")

})
$('#barres').click(function () {
    console.log("metzler clicked")
    $('#barresSection').removeClass("hideSection")
    $('#people').addClass("hideSection")

})
$('#delaney').click(function () {

    $('#delaneySection').removeClass("hideSection")
    $('#people').addClass("hideSection")

})
$('#waters').click(function () {

    $('#watersSection').removeClass("hideSection")
    $('#people').addClass("hideSection")

})
$('#otoole').click(function () {

    $('#otooleSection').removeClass("hideSection")
    $('#people').addClass("hideSection")

})
$('#archived').click(function () {

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

    $('#communitySection').removeClass("hideSection")
    $('#topics').addClass("hideSection")

})
$('#workplace').click(function () {

    $('#workplaceSection').removeClass("hideSection")
    $('#topics').addClass("hideSection")

})
$('#healthcare').click(function () {

    $('#healthcareSection').removeClass("hideSection")
    $('#topics').addClass("hideSection")

})
$('#political').click(function () {

    $('#politicalSection').removeClass("hideSection")
    $('#topics').addClass("hideSection")

})
$('#transparenthood').click(function () {

    $('#transparenthoodSection').removeClass("hideSection")
    $('#topics').addClass("hideSection")

})
$('#visibility').click(function () {

    $('#visibilitySection').removeClass("hideSection")
    $('#topics').addClass("hideSection")

})