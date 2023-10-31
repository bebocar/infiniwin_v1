$(document).ready(function(){

  $( '.country_icon' ).hover(
    function(){
      $('.country_icon').css("animationPlayState","paused")
  },

    function(){
      $('.country_icon').css("animationPlayState","running")
    }
 )



 $( '.country_item' ).hover(
   function(){
     $('.dropdown').removeClass("bling")
 },

   function(){
     $('.dropdown').addClass("bling")
   }
)






})
