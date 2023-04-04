// First checbox click
$(document).ready(function() {
    $('#checkbox').click(function(event) {
    var checkBox = document.getElementById("checkbox");
    if (checkBox.checked == true){
     $(this).parents('.offers_slider_item_overlay').addClass('active');
     $(this).parents('.offers_slider_item_overlay').find('.offers_slider_item_range').addClass('active');
     CheckActive();
     $(this).parents('.offers_slider_item_overlay').find('.offers_slider_item_toplabel_input').attr("required","required");
    } else {
     $('.offers_slider_item_overlay').removeClass('active');
     $('.offers_slider_item_overlay').find('.offers_slider_item_range').removeClass('active');
     CheckDisable();
     $("#checkbox-2").prop( "checked", false );
     $(this).parents('.offers_slider_item_overlay').find('.offers_slider_item_toplabel_input').removeAttr("required");
     $("#checkbox-2").parents('.offers_slider_item_overlay').find('.offers_slider_item_toplabel_input').removeAttr("required");
    }
   });
   });
   // OnInput first slider Input
   $(document).ready(function() {
     var checkBox = document.getElementById("checkbox");
     var slider_input = document.getElementById('slider-range-value');      
     slider_input.oninput = function() {
        checkBox.checked = true;
        $(this).parents('.offers_slider_item_overlay').find('.offers_slider_item_range').addClass('active');
        $(this).parents('.offers_slider_item_overlay').addClass('active');
        CheckActive();
        $(this).parents('.offers_slider_item_overlay').find('.offers_slider_item_toplabel_input').attr("required","required");
      };
   });
   // OnInput second slider Input
   $(document).ready(function() {
     var checkBox = document.getElementById("checkbox-2");
     var slider_input = document.getElementById('slider-range-value2');
     slider_input.oninput = function() {
       checkBox.checked = true;
       $(this).parents('.offers_slider_item_overlay').find('.offers_slider_item_range').addClass('active');
       $(this).parents('.offers_slider_item_overlay').addClass('active');
       CheckActive();
       $(this).parents('.offers_slider_item_overlay').find('.offers_slider_item_toplabel_input').attr("required","required");
     };
   });
   function CheckActive() {
     document.getElementById("checkbox-2").disabled = false;
   }
   function CheckDisable() {
     document.getElementById("checkbox-2").disabled = true;
   }
   $(document).ready(function() {
     CheckDisable()
   });
   // Second checbox click
   $(document).ready(function() {
    $('#checkbox-2').click(function(event) {
      var checkBox2 = document.getElementById("checkbox-2");
      if (checkBox2.checked == true){
       $(this).parents('.offers_slider_item_overlay').find('.offers_slider_item_range').addClass('active');
       $(this).parents('.offers_slider_item_overlay').addClass('active');
       $(this).parents('.offers_slider_item_overlay').find('.offers_slider_item_toplabel_input').attr("required", "required");
      } else {
       $(this).parents('.offers_slider_item_overlay').removeClass('active');
       $(this).parents('.offers_slider_item_overlay').find('.offers_slider_item_range').removeClass('active');
       $(this).parents('.offers_slider_item_overlay').find('.offers_slider_item_toplabel_input').removeAttr("required");
        }
   });
   });
    
    $("#offers_check").click(function() { return false; });
    // redirect on form submission
    document.addEventListener("DOMContentLoaded", function() {
      var form = document.getElementById("offers_form");
      form.addEventListener("submit", function(event) {
        event.preventDefault();
        var checkBox = document.getElementById("checkbox-2"); 
        var checkBox2 = document.getElementById("checkbox"); 
        if (checkBox.checked  && checkBox2.checked) {
          window.location.href = "https://owen-prevoir-prototype.webflow.io/insurance-registration";
        } else if (checkBox2.checked) {
          window.location.href = "https://owen-prevoir-prototype.webflow.io/insurance-registration-2";
        } else {
          window.location.href = "https://owen-prevoir-prototype.webflow.io/insurance-registration-2-free";
        }
   });
   });
    // prevent form submission on enter
   $(document).ready(function() {
     $('#email-form-2').keydown(function(event){
     if(event.keyCode == 13) {
      event.preventDefault();
      return false;
     }
   });
   });