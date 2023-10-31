$(document).ready(function(){

 $('.sidebanner_item').hover(

   function(){

     var info = $(this).attr('data-contact');

     $('.'+info).css("opacity","1");

   },

   function(){

     $('.hover_info').find('span').css("opacity","0");

   }
)

})
