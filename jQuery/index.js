$(".ybtn")[0].addEventListener("click", function () {
  $("h1").toggleClass("y-title");
});
$("body").keydown(function (event) {
  $(".alert-info").text("Key pressed: " + event.key);
});
$(".slbtn").click(function(){
    $(".alert-info").slideToggle();
});