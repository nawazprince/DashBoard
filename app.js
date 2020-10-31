$(document).ready(function(){
    $(".sidebar-btn").click(function(e){
        e.preventDefault();
        $(".sidebar").toggleClass("collapse");
    });

  $('.menu-btn').click(function(e) {
    e.preventDefault();
    $(this).siblings('.sub-menu').slideToggle();
    $(this).find('.drop-down').toggleClass("rotate");
});

$('.drop-down-btn').click(function (e) { 
  e.preventDefault();
  $(this).siblings('.drop-down-links').slideToggle();
  //$(this).find('.drop-down').toggleClass("rotate");
});
})