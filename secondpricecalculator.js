 <script>
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
	</script>