// Your code here 
class Dog{
	constructor(name){
		this.name = name;
	}
	static makeJet(){		
		// newDog = {};
		const dog1 = new Dog('Jet');
		dog1.speak = function(word){
			return `${this.name} says ${word}`			
		}		
		dog1.changeName = function(newName){
			this.name = newName;
		}
		return dog1;
		
	}



	// static makeFreyja(){
	// 	const Freyja = new Dog('Freyja');
	// 	Freyja.speak = function(word){
	// 		return `${this.name} says ${word}`
	// 	}
	// }
}
module.exports = Dog;
// const dog1 = Dog.makeJet();  
// console.log(dog1)
// console.log(dog1.name)
/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Dog;
} catch {
	module.exports = null;
}
