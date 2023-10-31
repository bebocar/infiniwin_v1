$(document).ready(function() {

  $('.ds_content').hide();
  $('.deposit_popup').hide();
  $('.ds_content').css('opacity','1');
  $('.deposit_popup').css('opacity','1');

  $('.ds_header').click(function(){

    $(this).toggleClass('ds_header_active');

    $(this).siblings('.ds_content').slideToggle();

  })

  $('.dp_open_btn').click(function(){
    $('.deposit_popup').fadeIn();
  })


  $('.dp_close').click(function(){
    $('.deposit_popup').fadeOut();
  })


    $('.deposit_popup').click(function(event) {

      var clickover = $(event.target);

      if (!clickover.parents(".deposit_popup").length) {
          $(this).fadeOut();
      }

    });





})
