const card =(array)=>{
	const validate= {
	valid : true
		};
for(let count = 0; count < array.length; count++){
	if(isNaN(array[count])){
	let word = "Invalid card number";
		return word;
		}
	}
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
array = [3,4,3,"a",9,0,0,1,8,6,5,3,2,3,1]
console.log(card(array));