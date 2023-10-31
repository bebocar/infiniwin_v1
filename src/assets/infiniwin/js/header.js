$(document).ready(function() {

  // $('.lang_btn').click(function(){
  //   $('.lang').css('display','flex');
  // })
  // $('.lang_close').click(function(){
  //   $('.lang').hide();
  // })
  //
  // $('.lang').click(function(event){
  //
  //   var clickover = $(event.target);
  //
  //   if(!clickover.parents('.lang').length){
  //     $('.lang').fadeOut();
  //   }
  //
  // })


  $('.logged_dropdown').hide();
  $('.logged_dropdown').css('opacity','1');

  $('.logged_label').click(function(){

    var selected_dropdown =   $(this).siblings('.logged_dropdown');

    $('.logged_dropdown').not(selected_dropdown).slideUp(200);
    selected_dropdown.slideToggle(200);
  })


//----------Close when click outside of element--------------------------------------------------

  $('body').click(function(event) {
    var clickover = $(event.target);

    if (!clickover.parents(".logged_item").length) {
        $('.logged_dropdown').slideUp(200);
    }
  });


//---------------Footer-------------------------------------

$('.game_status').owlCarousel({
  loop:true,
  items:5,
  autoplay:true,
  autoplayTimeout:3000,
  autoplayHoverPause:true,
});

$('.provider-carousel').owlCarousel({
  loop:true,
  items:10,
  autoplay:true,
  autoplayTimeout:3000,
  autoplayHoverPause:true,
});


})
