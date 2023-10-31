
  $(document).ready(function() {

    $('.vip_popup').hide();

    $('.vip_status').click(function() {
      $(".vip_popup").css("opacity", "1");
      $('.vip_popup').fadeIn();
    })

    $('.vip_popup').click(function(event) {

      var clickover = $(event.target);

      if (!clickover.parents(".vip_popup").length) {
        $('.vip_popup').fadeOut();
      }
    });

    $('.vip_close').click(function() {
      $('.vip_popup').fadeOut();
    })



  })
