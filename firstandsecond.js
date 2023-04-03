		function ageCalculator() {

		var sliderInput = document.getElementById("slider-range-value").value;
    var sliderInputSlice =  sliderInput.slice(0, -1);
    var sliderInputSliceNum = Number(sliderInputSlice);
    var sliderInputCalc = (sliderInputSliceNum / 10);
    
    var startPrice = document.getElementById("firstmember_lowPrice");
		var startPriceAttr = startPrice.getAttribute('startPrice');
		var startPriceAttrNum = Number(startPriceAttr);
		
    
    var startPriceHight = document.getElementById("firstmember_hightPrice");
		var startPriceHightAttr = startPriceHight.getAttribute('startPrice');
		var startPriceHightAttrNum = Number(startPriceHightAttr);
		
		

		return startPrice.innerHTML =  (startPriceAttrNum + sliderInputCalc),
    startPriceHight.innerHTML =  (startPriceHightAttrNum + sliderInputCalc);
		
    }
    $(document).ready(function() {
         ageCalculator();
    });

var slider = document.getElementById('slider-range');
var anotherslider = document.getElementById('slider-range2');

noUiSlider.create(slider, {
    start: [50],
    range: {
        'min': [50],
        'max': [150]
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


function ageCalculatorSecond() {

    var sliderInput = document.getElementById("slider-range-value2").value;
var sliderInputSlice =  sliderInput.slice(0, -1);
var sliderInputSliceNum = Number(sliderInputSlice);
var sliderInputCalc = (sliderInputSliceNum / 10);

    var startPrice = document.getElementById("secondmember_lowPrice");
    var startPriceAttr = startPrice.getAttribute('startPrice');
    var startPriceAttrNum = Number(startPriceAttr);
    

    var startPriceHight = document.getElementById("secondmember_hightPrice");
    var startPriceHightAttr = startPriceHight.getAttribute('startPrice');
    var startPriceHightAttrNum = Number(startPriceHightAttr);
    
    

    return startPrice.innerHTML =  (startPriceAttrNum + sliderInputCalc),
startPriceHight.innerHTML =  (startPriceHightAttrNum + sliderInputCalc);
    
}
$(document).ready(function() {
     ageCalculatorSecond();
});


noUiSlider.create(anotherslider, {
  start: [50],
  range: {
      'min': [50],
      'max': [150]
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