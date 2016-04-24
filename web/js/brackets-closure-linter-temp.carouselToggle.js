var personIds=["metzler", "bills","delaney", "barres", "waters", "otoole", "archived" ]

$('#metzler').click(function () {
    console.log("metzler clicked")
    $('#metzlerSection').removeClass("hideSection")
    $('#people').addClass("hideSection")

})
$('#bills').click(function () {
    console.log("bills clicked")
    $('#billsSection').removeClass("hideSection")
    $('#people').addClass("hideSection")

})
$('.personClose').click(function () {
    console.log("close clicked")
    $('.carouselSection').addClass("hideSection")
    $('#people').removeClass("hideSection")

})