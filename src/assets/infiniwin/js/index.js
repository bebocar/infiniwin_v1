$(document).ready(function(){

  var x = 0;
  const item_length = $(".hot_item").length;
  const no_display =5;

 setInterval(function(){

   hot_item();

 }, 5000);

 function hot_item(){

   $(".hot_item").hide();

   let from = x * no_display;
   let to = from + no_display;

   if(to > item_length){
     to = item_length;
   }


   var display_items = $(".hot_item").slice(from, to);

   display_items.show();

   x++;

   if(x>= item_length/no_display){
     x=0;
   }

 }





})
