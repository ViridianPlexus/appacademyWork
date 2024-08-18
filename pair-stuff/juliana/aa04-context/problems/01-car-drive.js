// Your code here 

class Car{

	constructor(){
		this.speed = 0;
	}

	drive(distance){

		this.speed += distance;

		return this.speed;

	}

}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Car;
} catch {
	module.exports = null;
}
