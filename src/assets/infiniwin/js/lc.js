$(document).ready(function(){

$('.lc_pop').hide();

 $('.lc_item').click(function(){

   $('.lc_item').removeClass('lc_active');
   $(this).addClass('lc_active');

   var pop = $(this).attr('data-pop');
   $('.lc_pop').hide();
   $('.'+pop).css('display','flex');
 })


 $('.lc_pop').click(function(){

   var clickover = $(event.target);

   if (!clickover.parents('.lc_pop').length){
     $('.lc_pop').fadeOut();
   }
 })

})
