$(document).ready(function() {
  //--------------Method selection, form display-------------------------------------------------------
    $('.method_radio input').click(function() {
      var previousValue = $(this).data('storedValue');
      var method_form = $(this).val();

      if($(this).data('qr') == true){
          $('input[name="isQR"]').attr('value','true');
      } else {
          $('input[name="isQR"]').attr('value','false');
      }

      // if previousValue = true then
      //     Step 1: toggle radio button check mark.
      //     Step 2: save data-StoredValue as false to indicate radio button is unchecked.
      if (previousValue) {
        $(this).prop('checked', !previousValue);
        $(this).data('storedValue', !previousValue);
        $('.method_form').slideUp('fast');
      }

      // If previousValue is other than true
      //    Step 1: save data-StoredValue as true to for currently checked radio button.
      //    Step 2: save data-StoredValue as false for all non-checked radio buttons.
      else {
        $(this).data('storedValue', true);
        $(".method_radio input[type=radio]:not(:checked)").data("storedValue", false);

        $('.method_form').slideUp('fast');
        $('.'+method_form).slideDown('fast');
      }

    //----------------------------------------------------------------

        $('.popup_btn').click(function(){
            $(`.${$(this).attr('data-popup')}`).css('display','flex')
        });

        $('.popup_close').click(function(){
            $(this).parents('.popup').hide();
        });

        $('.popup').click(function(e){
            $(e.target).parents('.popup').length ? "" : $(this).hide();
        });

    //----------Shortcut amount button-------------------------------

  $('.shortcut_amount').click(function(){

    let amount = $(this).text();
    $(this).parents('.shortcut_btns').siblings('input').val(amount);
  })

  //---------------------------------




  })

})
