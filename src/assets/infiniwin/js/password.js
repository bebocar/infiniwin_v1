$(document).ready(function(){

  setup();

  $('.view').click(function(){

    $(this).hide();
    $(this).siblings('.noview').show();
    $(this).siblings('input').prop({type:"text"});

  })

  $('.noview').click(function(){
    $(this).hide();
    $(this).siblings('.view').show();
    $(this).siblings('input').prop({type:"password"});
  })


  function setup(){
    $('.noview').hide();
  }



})
