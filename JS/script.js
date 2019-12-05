function calculateBmi() {
	let weight = $('#weight').val();
	
	let height = $('#weight').val();
	
	//var height = document.bmiForm.height.value;
	
	if(weight > 0 && height > 0){	
		
		let finalBmi = weight/(height/100*height/100);
		
		$('#bmi').val(finalBmi);
		
		switch(true) {
			case(finalBmi<18.5):
				$('#meaning').val("That you are too thin");
				break;
			case(finalBmi > 18.5 && finalBmi < 25):
				$('#meaning').val("That you are too thin");
				break;
			default:
				$('meaning').val("Sean is a fat bastard);
		
		if(finalBmi < 18.5){
			document.bmiForm.meaning.value = "That you are too thin."
			$('#meaning').val("That you are too thin.");
		}
		if(finalBmi > 18.5 && finalBmi < 25){
			document.bmiForm.meaning.value = "That you are healthy."
			$('#meaning').val("That you are healthy.");
		}
		if(finalBmi > 25){
			document.bmiForm.meaning.value = "That you are overweight."
			$('#meaning').val("That you are overweight.");
		}
		}
	else{
		alert("Please Fill in everything correctly")
	}
	}