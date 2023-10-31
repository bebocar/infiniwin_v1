$(document).ready(function() {

  var item_length =  $('.promo_item').length;
  var display_item = 100;


  update($('.promo_item'))

  $('.promo_item').hide();
  if($(".promo_item").hasClass("promo_all")){
      $('.promo_all').show();
  }
  //   for(i=0;i<display_item;i++){
  //     $('.promo_item').eq(i).css('display','flex')
  // }

$('.promotion_nav_item').click(function(){

  $('.promotion_nav_item').removeClass('promotion_nav_active');
  $(this).addClass('promotion_nav_active');

  var category = $(this).attr('data-cat');

  $('.promo_item').hide();

  for(i=0 ;i<display_item;i++){
      $(`.${category}`).eq(i).css('display','flex');
  }

  update($(`.${category}`));

})



function update(x){

  item_length = x.length;

  $('.pagination').pagination({
     items: item_length,
     itemsOnPage: display_item,
     onPageClick: function(pageNumber) {
       $('.promo_item').hide();

       var from = (pageNumber-1) * display_item;
       var to = from + display_item;

       for(i=from ;i<to;i++){
         x.eq(i).css('display','flex')
       }
     }
 });

}


  $('.promo_btn').click(function(){
    $('.promo_popup').hide();
    $('.' + $(this).attr('data-promo') ).css('display','flex');
  })


  $('.promo_popup').click(function(event) {
    var clickover = $(event.target);

    if (!clickover.parents(".promo_popup").length) {
        $('.promo_popup').hide();
    }
  });

  $('.promo_close').click(function(){
    $('.promo_popup').hide();
  })


})
