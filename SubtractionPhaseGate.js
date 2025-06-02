const prompt = require("prompt-sync")();
let counts = 0;
let correctCount = 0;
let userAnswer;
while (true){
	let number1 = Math.floor(Math.random() * 10);
	let number2 = Math.floor(Math.random() * 10);
	
	if(number1 > number2){
		let quotient = number1 - number2;
		let counter = 0;
		
		while (true){
			console.log(`what is   ${number1} - ${number2} ? `);
			while(true){
				 userAnswer = prompt("Enter your answer here ");
				if(!isNaN(userAnswer)){
					break;
					}else{
						 alert("That's not a valid integer. Try again.");
						}
				}
			
			if(userAnswer == quotient){
				correctCount += 1;
				break;
				}else{
					counter = counter + 1	
					if(counter > 1){
						break;
						}
					}
			}
		
		}else{
			continue;
			}
		counts = counts + 1;
		if(counts == 10){
			break;
				}

	}
console.log(`The total score is ${correctCount} / ${counts}`);