$(document).ready(function() {
    $('.btn_menu').on('click',  function(e){
       e.preventDefault();
       $('.nav').toggleClass('active');
   });

   $('.scrolltop').click(function(e){
    e.preventDefault();
    var target = $(this).attr('href');
    var targetPos = $(target).offset().top;
    $('html, body').animate({scrollTop: targetPos}, 1000);
    });
 });