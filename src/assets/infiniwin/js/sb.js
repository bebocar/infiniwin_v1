$(document).ready(function(){

  // $('.iframe_content').hide();
  // $('.iframe_content').eq(0).show();

  $('.sb_nav_item').click(function(){

    var iframe = $(this).attr('data-iframe');

    if(iframe){
      $('.sb_nav_item').removeClass('sb_nav_active');
      $(this).addClass('sb_nav_active');
      $('.iframe_content').hide();
      $('.'+iframe).fadeIn();
      return;
    }

  })

})
