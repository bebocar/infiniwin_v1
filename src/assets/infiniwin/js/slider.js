$(document).ready(function() {

  var slides_no = 0;
    var banner_length = $('.slide').length;

    var slideInterval = setInterval(function() { nextSlide(1);}, 4000);

    //------------------------------------

    //show the first banner by default
    $('.slide').hide();
    $('.slide').eq(0).show();

    active_dot(0);
    //---------------------------


    $('.slide_btn').click(function(){
        slides_no = $(this).index();
        active_dot(slides_no);
        nextSlide(0);
        resetInterval();
    });


    function resetInterval() {
      clearInterval(slideInterval);
      slideInterval= setInterval(function() {nextSlide(1);}, 4000);
    }


    function nextSlide(i) {

      slides_no+=i;

      if (slides_no >= banner_length) {
        slides_no = 0;
      }

      else if(slides_no < 0){
        slides_no = banner_length-1;
      }

      active_dot(slides_no);

      $('.slide').hide();
      $('.slide').eq(slides_no).show();

    }


    function active_dot(i){
      $('.slide_btn').removeClass('active_btn');
      $('.slide_btn').eq(i).addClass('active_btn');

      $('.slide_dot').removeClass('slide_dot_active');
      $('.slide_dot').eq(i).addClass('slide_dot_active');

    }


})
