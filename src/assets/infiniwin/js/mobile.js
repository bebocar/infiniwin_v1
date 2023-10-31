$(document).ready(function(){

//--------Pormotion Navigation bar------------------------

  $('.mobile_nav_item').click(function(){
    $('.mobile_nav_item').removeClass('mobile_nav_active');
    $(this).addClass('mobile_nav_active');

    let mobile_pop = $(this).attr('data-pop');

  })


//--------popup----------------------------------------------------------
$('.mobile_popup').hide();


$('.mobile_item').click(function(){

  var popup = $(this).attr('data-pop');

  $('.mobile_popup').hide();
  $('.'+ popup).fadeIn();

})




$('.mobile_popup').click(function(event){

    var clickover = $(event.target);

    if (!clickover.parents('.mobile_popup').length){
      $(this).fadeOut();
    }

  })

})

$('.mobile_popup_close').click(function(){
  $('.mobile_popup').fadeOut();
})
