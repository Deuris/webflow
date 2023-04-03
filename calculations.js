// Import noUiSlider and wNumb libraries
document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/15.7.0/nouislider.min.js" integrity="sha512-UOJe4paV6hYWBnS0c9GnIRH8PLm2nFK22uhfAvsTIqd3uwnWsVri1OPn5fJYdLtGY3wB11LGHJ4yPU1WFJeBYQ==" crossorigin="anonymous" referrerpolicy="no-referrer"><\/script>');
document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/wnumb/1.2.0/wNumb.min.js" integrity="sha512-igVQ7hyQVijOUlfg3OmcTZLwYJIBXU63xL9RC12xBHNpmGJAktDnzl9Iw0J4yrSaQtDxTTVlwhY730vphoVqJQ==" crossorigin="anonymous" referrerpolicy="no-referrer"><\/script>');

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
 
 // Modal Note
   $(document).ready(function() { 
   $('.offers_note_link').click(function(event) { 
       event.preventDefault(); 
       $('.product-popup').show(); 
       $('html,body').addClass('hidden'); 
   }); 
 });
   $(document).ready(function() { 
   $('.product-close').click(function(event) { 
       event.preventDefault(); 
       $('.product-popup').hide(); 
       $('html,body').removeClass('hidden'); 
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
 
 function ageCalculator() {
 
     var sliderInput = document.getElementById("slider-range-value").value;
     var sliderInputSlice =  sliderInput.slice(0, -1);
     var sliderInputSliceNum = Number(sliderInputSlice);
     
     switch (sliderInputSliceNum) {
          case 20:
             sliderCena = 0;
             break
          case 30:
             sliderCena = 1;
             break
          case 40:
             sliderCena = 2;
             break
          case 50:
             sliderCena = 3;
             break
          case 60:
             sliderCena = 4;
             break
          case 70:
             sliderCena = 5;
             break
          case 80:
             sliderCena = 6;
             break
          case 90:
             sliderCena = 7;
             break
          case 100:
             sliderCena = 8;
             break
          default:
             sliderCena = 0;
             break
     }
     var startPriceHight = document.getElementById("firstmember_hightPrice");
         
     
     var userdata = document.getElementById("offer_firstmember_date").value;
         var dob = new Date(userdata);
         var month_diff = Date.now() - dob.getTime();
         var age_dt = new Date(month_diff); 
         var year = age_dt.getUTCFullYear();
         var age = Math.abs(year - 1970);
         
         switch (true) {
              case age <= 29:
             agecena = 0;
             break
          case age <= 39:
             agecena = 1;
             break
          case age <= 49:
             agecena = 2;
             break
          case age <= 59:
             agecena = 3;
             break
          case age <= 65:
             agecena = 4;
             break
          case age > 65:
             agecena = 5;
             break
          default:
             agecena = 0;
             break
     }
         var calcul = 4.22 + (agecena * 1.5) + (sliderCena * 0.45);
     var calculFixed = calcul.toFixed(2);
     
     
     var startPriceLow = document.getElementById("firstmember_lowPrice");
     var calculLow = (calculFixed / 2);
     var calculLowFixed = calculLow.toFixed(2);
     
         return startPriceHight.innerHTML =  calculFixed,
     startPriceLow.innerHTML =  calculLowFixed;
         
 }
 $(document).ready(function() {
   ageCalculator();
 });
 
 var slider = document.getElementById('slider-range');
 var anotherslider = document.getElementById('slider-range2');
 
 noUiSlider.create(slider, {
     start: [20],
     range: {
         'min': [20],
         'max': [100]
     },
     step: 10,
     connect: [true, false],
     format: wNumb({
       decimals: 0,
       thousand: '',
       suffix: '€'
     })
 });
 
 
 var inputFormat = document.getElementById('slider-range-value');
 
 slider.noUiSlider.on('update', function (values, handle) {
     inputFormat.value = values[handle];
     ageCalculator();
     
 });
 
 inputFormat.addEventListener('change', function () {
     slider.noUiSlider.set(this.value);
     ageCalculator();
     
 });
 

noUiSlider.create(anotherslider, {
    start: [20],
    range: {
        'min': [20],
        'max': [100]
    },
    step: 10,
    connect: [true, false],
    format: wNumb({
      decimals: 0,
      thousand: '',
      suffix: '€'
    })
  });
  
  var secondInput = document.getElementById('slider-range-value2');
  
  anotherslider.noUiSlider.on('update', function (values, handle) {
    secondInput.value = values[handle];
    ageCalculatorSecond();
  });
  
  secondInput.addEventListener('change', function () {
    anotherslider.noUiSlider.set(this.value);
    ageCalculatorSecond();
  });


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
    
    
    function ageCalculatorSecond() {
    
    }