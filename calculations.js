$("#offer_firstmember_date").mask("99/99/9999",{completed: function(){ageCalculator();}});
$("#offer_secondmember_date").mask("99/99/9999",{completed: function(){ageCalculatorSecond();}});
function ageCalculator() {
    let sliderCena;
    let agecena;
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
  return startPriceHight.innerHTML =  calculFixed.replace(/\./g, ','),
  startPriceLow.innerHTML =  calculLowFixed.replace(/\./g, ',');
  
 }
 setTimeout(ageCalculator, 2000);
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
function ageCalculatorSecond() {
    let sliderCena;
    let agecena;
 var sliderInput = document.getElementById("slider-range-value2").value;
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
 var startPriceHight = document.getElementById("secondmember_hightPrice");
 var userdata = document.getElementById("offer_secondmember_date").value;
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
 var calcul = 0.67 + (agecena * 1.6) + (sliderCena * 0.45);
 var calculFixed = calcul.toFixed(2);
 var startPriceLow = document.getElementById("secondmember_lowPrice");
 var calculLow = (calculFixed / 2);
 var calculLowFixed = calculLow.toFixed(2);
 
 return startPriceHight.innerHTML =  calculFixed.replace(/\./g, ','),
 startPriceLow.innerHTML =  calculLowFixed.replace(/\./g, ',');
 
}
