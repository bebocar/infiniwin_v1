$(document).ready(function(){

// $('.slot_lobby').hide();


$('.slot_item').click(function(){

  $("#username2").focus();

  var lobby = $(this).attr('data-lobby');

  // $('.slot_lobby').hide();
  $('.'+lobby).fadeIn();
  $('.'+lobby).css("display","flex");
})


//------------Slot lobby filter-----------------------

$('.sl_back').click(function(){
  $('.slot_lobby').fadeOut();
})


$('.sl_nav_item').click(function(){
  $('.sl_nav_item').removeClass('sl_nav_active');
  $(this).addClass('sl_nav_active');
  var category = $(this).attr('data-game');
  $('.sl_game').hide();
  $('.sl_game.'+category).fadeIn();
})

$('.slot_lobby').click(function(event){

  var clickover = $(event.target);

  if(!clickover.parents('.slot_lobby').length){
    $('.slot_lobby').fadeOut();
  }

})




})
