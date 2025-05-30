const card =(array)=>{
const validate= {
	valid : true
	};
if(array.length < 15){
validate.valid = false;
validate.reason = "Invalid length";
	}else {
		if(array.length == 15 && array[0] == 3){
			validate.issuer = "American Express"
			}else if (array.length == 15 && array[0] != 3){
					validate.valid = false;
					validate.reason = "Invalid card number"
					} else{
						//for visa,mastercard and discover
if(array.length < 16 || array.length > 16){
	validate.valid = false;
	validate.reason = "Invalid length";
	}else {
		if(array.length == 16 && array[0] == 4){
		validate.issuer = "Visa";
		}else if(array.length == 16 && array[0] == 5){
			validate.issuer = "Mastercard";
			}else if(array.length == 16 && array[0] == 6){
				validate.issuer = "Discover";
				}else{
					validate.valid = false;
					validate.reason = "Invalid card number"
					}	
	}
	
						}
		}

return validate;
}

array = [5,5,7,8,9,0,0,1,8,6,5,3,2,3,1,2]
console.log(card(array));