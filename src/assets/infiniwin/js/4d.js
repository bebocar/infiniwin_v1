$(document).ready(function(){

  $('.payout_btn').click(function(){
    $('.lottery_payout').css('display','flex');
  })

  $('.bet_btn').click(function(){
    $('.lottery_bet').css('display','flex');
  })


  $('.lottery_popup_close').click(function(){
    $('.lottery_popup').fadeOut();
  })

  $('.lottery_popup').click(function(event){

      var clickover = $(event.target);

      if (!clickover.parents('.lottery_popup').length){
        $('.lottery_popup').fadeOut();
      }

    })


    $('.payout_nav_item').click(function(){
      $('.payout_nav_item').removeClass('payout_nav_active');
      $(this).addClass('payout_nav_active');
      $('.payout_table_body').hide();

      $('.'+$(this).attr('data-payout')).css('display','flex');
    })

})
