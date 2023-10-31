$(document).ready(function(){

// if(getCookie("visited")){
//   $('.tutorial').hide();
// }
// else{
//   $('.tutorial').css('display','flex');
// }
//
// $('.show_checkbox').click(function(){
//     setCookie("visited",$(this).val(),365)
// })


$('.tutorial_continue').click(function(){
  $('.tutorial').fadeOut();
})

$('.tutorial').click(function(event){

  var clickover = $(event.target);

  if(!clickover.parents('.tutorial').length){
    $('.tutorial').fadeOut();
  }

})



function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


})
