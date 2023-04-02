<script>
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
	</script>