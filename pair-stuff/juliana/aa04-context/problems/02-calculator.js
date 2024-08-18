// Your code here 

class Calculator{

	constructor(value = 0){
		this.value = value
	}
	add(num){
		this.value += num;
		 return this.value;
	}
	subtract(num){
		this.value -= num;
 		return this.value;
	}
	multiply(num){
		this.value *= num;
 		return this.value;
	}
	divide(num){
		this.value /= num;
 		return this.value;
	}


}

module.exports = Calculator;

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Calculator;
} catch {
	module.exports = null;
}
