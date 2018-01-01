function Person(fn,ln){
	this.ln=ln;
	this.fn=fn;
	
}
Person.prototype.greet=function(){
	console.log('fn'+this.fn+'ls'+this.ln)
}
var abhi= new Person('Abhijit','Shirsath');
abhi.greet();
var tan= new Person('Tanmay','prabhulker');
tan.greet();
console.log(abhi.__proto__);console.log(tan.__proto__);
console.log(abhi.__proto__===tan.__proto__);