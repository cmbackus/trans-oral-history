var personIds = ["metzler", "bills", "delaney", "barres", "waters", "otoole", "archived"];

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
$('#metzler').click(function () {
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
    $('.carouselSection').addClass("hideSection")
    $('#people').removeClass("hideSection")

})