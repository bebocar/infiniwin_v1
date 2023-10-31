$(document).ready(function(){

  function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  function startDateTime() {
    var today = new Date();

    var y = today.getFullYear();
    var m = today.getMonth()+1;
    var d = today.getDate();
    var t = today.getTime();
    var h = today.getHours();
    var min = today.getMinutes();
    var s = today.getSeconds();

    // add a zero in front of numbers<10
    d = addZero(d);
    m = addZero(m);
    min = addZero(min);
    s = addZero(s);


    $('.date').html(d + "/" + m + "/" + y);
    $('.time').html(h + ":" + min + ":" + s);


    t = setTimeout(function() {
      startDateTime()
    }, 500);

  }

  startDateTime();


})
